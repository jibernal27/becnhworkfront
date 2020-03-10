import React from 'react';
import { Field } from 'redux-form';
import TypeField from './TypeField';

export default function TextField(props) {
  return <Field component={TypeField} {...props} />;
}
