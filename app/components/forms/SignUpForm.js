import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { reduxForm } from 'redux-form';
import TextField from 'components/fields/TextField';
import messages from './messages';
import BaseLoginForm from './BaseLoginForm';
import BaseEditProfileForm from './BaseEditProfileForm';
import {
  required,
  maxLength,
  fileRequired,
  minLength,
  samePassword,
} from './validators';

const SignUpForm = ({ handleSubmit, submitting, createUser, error }) => {
  return (
    <Form onSubmit={handleSubmit(createUser)}>
      {error && <strong className="text-danger">{error}</strong>}
      <BaseLoginForm />
      <TextField
        name="password_confirm"
        type="password"
        label={<FormattedMessage {...messages.confirmPassword} />}
      />
      <BaseEditProfileForm />
      <Button variant="primary" type="submit" disabled={submitting}>
        <FormattedMessage {...messages.signUp} />
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
  password_confirm:
    required(values.password_confirm) ||
    minLength(8)(values.password_confirm) ||
    samePassword(values.password, values.password_confirm),
  first_name: required(values.first_name),
  last_name: required(values.last_name),
  short_biography: required(values.short_biography),
  profile_picture: fileRequired(values.profile_picture),
  preferred_language: required(values.preferred_language),
});

export default reduxForm({ form: 'signup', validate })(SignUpForm);
