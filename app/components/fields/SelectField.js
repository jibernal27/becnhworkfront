import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Field } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const SelectFieldInput = ({
  input,
  label,
  type,
  options,
  meta: { touched, error, warning },
  ...props
}) => {
  return (
    <Form.Group as={Row}>
      <Form.Label column md="4">
        {label}
      </Form.Label>
      <Col md="8">
        <Form.Control {...input} as="select" type={type} {...props}>
          <option />

          {options.map(v => (
            <option value={v.value} key={v.value}>
              {v.label}
            </option>
          ))}
        </Form.Control>
        {touched &&
          ((error && <small className="text-danger">{error}</small>) ||
            (warning && <small className="text-danger">{warning}</small>))}
      </Col>
    </Form.Group>
  );
};

export default function SelectField(props) {
  return <Field component={SelectFieldInput} {...props} />;
}
