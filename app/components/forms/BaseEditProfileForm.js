import React, { Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TextField from 'components/fields/TextField';
import { FormattedMessage } from 'react-intl';
import FieldFileInput from 'components/fields/FileField';
import SelectField from 'components/fields/SelectField';
import { makeSelectInitData } from 'containers/App/selectors';
import messages from './messages';

const BaseLoginForm = ({ intialData }) => {
  const parseLangs = () => {
    const { languages } = intialData;
    if (languages) {
      return languages.map(l => ({ label: l.name, value: l.id }));
    }
    return [];
  };

  return (
    <Fragment>
      <TextField
        name="first_name"
        type="text"
        label={<FormattedMessage {...messages.firstName} />}
      />
      <TextField
        name="last_name"
        type="text"
        label={<FormattedMessage {...messages.lastName} />}
      />
      <TextField
        name="short_biography"
        type="text"
        as="textarea"
        label={<FormattedMessage {...messages.shortBiography} />}
      />
      <SelectField
        name="preferred_language"
        options={parseLangs()}
        label={<FormattedMessage {...messages.language} />}
      />
      <FieldFileInput
        name="profile_picture"
        accept="image/*"
        label={<FormattedMessage {...messages.profilePicture} />}
      />
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  intialData: makeSelectInitData(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(BaseLoginForm);
