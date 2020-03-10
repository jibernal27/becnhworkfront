import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { reduxForm } from 'redux-form';
import messages from './messages';
import BaseFileForm from './BaseFileForm';
import { required, fileRequired } from './validators';

const FileForm = ({ handleSubmit, submitting, submitFunction, error }) => {
  return (
    <Form onSubmit={handleSubmit(submitFunction)}>
      {error && <strong className="text-danger">{error}</strong>}
      <BaseFileForm />
      <Button variant="primary" type="submit" disabled={submitting}>
        <FormattedMessage {...messages.create} />
      </Button>
    </Form>
  );
};

const validate = values => ({
  name: required(values.name),
  file: fileRequired(values.file),
});

export default reduxForm({ form: 'newFile', validate })(FileForm);
