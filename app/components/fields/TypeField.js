import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export default function TypeField({
  input,
  label,
  type,
  meta: { touched, error, warning },
  as = undefined,
  ...props
}) {
  return (
    <Form.Group as={Row}>
      <Form.Label column md="4">
        {label}
      </Form.Label>
      <Col md="8">
        <Form.Control {...input} type={type} as={as} />
        {touched &&
          ((error && <small className="text-danger">{error}</small>) ||
            (warning && <small className="text-danger">{warning}</small>))}
      </Col>
    </Form.Group>
  );
}
