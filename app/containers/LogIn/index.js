import React from 'react';
import LogInForm from 'components/forms/LogInForm';
import api from 'server';
import { SubmissionError } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { changeUser } from 'redux/user/actions';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const LogIn = ({ setUser, history }) => {
  const submit = async values => {
    const { data, error } = await api.user.logIn(values);
    if (error) {
      throw new SubmissionError(error);
    }

    localStorage.setItem('auth', data.access);
    api.setToken(data.access);

    const { data: user } = await api.user.getProfile();
    setUser(user);
    history.push('/');
  };

  return (
    <section>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <LogInForm createUser={submit} />
    </section>
  );
};

export function mapDispatchToProps(dispatch) {
  return {
    setUser: data => dispatch(changeUser(data)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(LogIn);
