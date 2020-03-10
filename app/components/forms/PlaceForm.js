import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { reduxForm } from 'redux-form';
import messages from './messages';
import BasePlaceForm from './BasePlaceForm';
import { required, fileRequired } from './validators';

const PlaceForm = ({ handleSubmit, submitting, submitFunction, error }) => {
  return (
    <Form onSubmit={handleSubmit(submitFunction)}>
      {error && <strong className="text-danger">{error}</strong>}
      <BasePlaceForm />
      <Button variant="primary" type="submit" disabled={submitting}>
        <FormattedMessage {...messages.create} />
      </Button>
    </Form>
  );
};

const validate = values => ({
  name: required(values.name),
  date_init: required(values.date_init),
  picture: fileRequired(values.picture),
});

export default reduxForm({ form: 'newPlace', validate })(PlaceForm);
