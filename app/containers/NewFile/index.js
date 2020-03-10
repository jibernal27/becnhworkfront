import React from 'react';
import FileForm from 'components/forms/FileForm';
import api from 'server';
import { SubmissionError } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const NewFile = ({ history }) => {
  const submit = async values => {
    const { error } = await api.user.createFile(values);
    if (error) {
      throw new SubmissionError(error);
    }
    history.push('/files');
  };

  return (
    <section>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <FileForm submitFunction={submit} />
    </section>
  );
};

const withConnect = connect(
  null,
  null,
);

export default compose(withConnect)(NewFile);
