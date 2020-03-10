import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { reduxForm } from 'redux-form';
import messages from './messages';
import BaseLoginForm from './BaseLoginForm';
import { required, maxLength, minLength } from './validators';

const LogInForm = ({ handleSubmit, submitting, createUser, error }) => {
  return (
    <Form onSubmit={handleSubmit(createUser)}>
      {error && <strong className="text-danger">{error}</strong>}
      <BaseLoginForm />
      <Button variant="primary" type="submit" disabled={submitting}>
        <FormattedMessage {...messages.login} />
      </Button>
    </Form>
  );
};

const validate = values => ({
  username:
    required(values.username) ||
    maxLength(20)(values.username) ||
    minLength(6)(values.password),
  password: required(values.password) || minLength(8)(values.password),
});

export default reduxForm({ form: 'login', validate })(LogInForm);
