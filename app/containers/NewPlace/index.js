import React from 'react';
import PlaceForm from 'components/forms/PlaceForm';
import api from 'server';
import { SubmissionError } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const NewPlace = ({ history }) => {
  const submit = async values => {
    const { error } = await api.user.createPlace(values);
    if (error) {
      throw new SubmissionError(error);
    }
    history.push('/places');
  };

  return (
    <section>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <PlaceForm submitFunction={submit} />
    </section>
  );
};

const withConnect = connect(
  null,
  null,
);

export default compose(withConnect)(NewPlace);
