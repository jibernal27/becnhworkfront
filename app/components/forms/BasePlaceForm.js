import React, { Fragment } from 'react';
import TextField from 'components/fields/TextField';
import { FormattedMessage } from 'react-intl';
import FieldFileInput from 'components/fields/FileField';
import messages from './messages';

export default function BaseLoginForm() {
  return (
    <Fragment>
      <TextField
        name="name"
        type="text"
        label={<FormattedMessage {...messages.name} />}
      />
      <FieldFileInput
        name="picture"
        accept="image/*"
        label={<FormattedMessage {...messages.picture} />}
      />
      <TextField
        name="date_init"
        type="date"
        label={<FormattedMessage {...messages.dateInit} />}
      />
      <TextField
        name="date_end"
        type="date"
        label={<FormattedMessage {...messages.dateEnd} />}
      />
    </Fragment>
  );
}
