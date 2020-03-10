import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { reduxForm } from 'redux-form';
import messages from './messages';
import BaseEditProfileForm from './BaseEditProfileForm';
import { required, fileRequired } from './validators';

const ProfileForm = ({ handleSubmit, submitting, createUser, error }) => {
  return (
    <Form onSubmit={handleSubmit(createUser)}>
      {error && <strong className="text-danger">{error}</strong>}
      <BaseEditProfileForm />
      <Button variant="primary" type="submit" disabled={submitting}>
        <FormattedMessage {...messages.editProfile} />
      </Button>
    </Form>
  );
};

const validate = values => ({

});

export default reduxForm({ form: 'profile', validate })(ProfileForm);
