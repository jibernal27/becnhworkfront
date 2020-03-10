/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ProfileForm from 'components/forms/ProfileForm';
import api from 'server';
import { SubmissionError } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { changeUser } from 'redux/user/actions';
import { makeSelectorUser } from 'redux/user/selector';
import { createStructuredSelector } from 'reselect';
import _, { isEqual } from 'lodash';

function difference(object, base) {
  function changes(object, base) {
    return _.transform(object, function(result, value, key) {
      if (!_.isEqual(value, base[key])) {
        result[key] =
          _.isObject(value) && _.isObject(base[key])
            ? changes(value, base[key])
            : value;
      }
    });
  }
  return changes(object, base);
}

const ProfileUpdate = ({ setUser, history, user }) => {
  const submit = async values => {
    const diff = difference(values, user);

    const { error } = await api.user.update(diff);
    if (error) {
      throw new SubmissionError(error);
    }

    const { data: userUpdated } = await api.user.getProfile();
    setUser(userUpdated);
    alert('Updated');
  };

  return (
    <section>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <img
        src={user.profile_picture}
        className="profile-picture"
        alt={`${user.first_name}`}
      />
      <ProfileForm createUser={submit} initialValues={user} />
    </section>
  );
};

export function mapDispatchToProps(dispatch) {
  return {
    setUser: data => dispatch(changeUser(data)),
  };
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectorUser(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProfileUpdate);
