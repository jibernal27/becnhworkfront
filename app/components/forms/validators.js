import React from 'react';
import { FormattedMessage, FormattedPlural } from 'react-intl';
import messages from './messages';

export const required = value =>
  value ? undefined : <FormattedMessage {...messages.required} />;

export const fileRequired = value =>
  value && value.length > 0 ? (
    undefined
  ) : (
    <FormattedMessage {...messages.required} />
  );
export const maxLength = max => value =>
  value && value.length > max ? (
    <FormattedPlural value={max} {...messages.maxLength} />
  ) : (
    undefined
  );
export const minLength = min => value =>
  value && value.length < min ? (
    <FormattedPlural value={min} {...messages.minLength} />
  ) : (
    undefined
  );
export const samePassword = (one, two) =>
  one === two ? undefined : <FormattedMessage {...messages.samePassword} />;
