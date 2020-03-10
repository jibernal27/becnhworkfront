import React, { Fragment } from 'react';
import TextField from 'components/fields/TextField';
import { FormattedMessage } from 'react-intl';
import FieldFileInput from 'components/fields/FileField';
import messages from './messages';

export default function BaseFileForm() {
  return (
    <Fragment>
      <TextField
        name="name"
        type="text"
        label={<FormattedMessage {...messages.name} />}
      />
      <FieldFileInput
        name="file"
        accept="application/pdf"
        label={<FormattedMessage {...messages.file} />}
      />
    </Fragment>
  );
}
