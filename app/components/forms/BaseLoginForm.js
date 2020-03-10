import React, { Fragment } from 'react';
import TextField from 'components/fields/TextField';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function BaseLoginForm() {
  return (
    <Fragment>
      <TextField
        name="username"
        type="text"
        label={<FormattedMessage {...messages.username} />}
      />
      <TextField
        name="password"
        type="password"
        label={<FormattedMessage {...messages.password} />}
      />
    </Fragment>
  );
}
