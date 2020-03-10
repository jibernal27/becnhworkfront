import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { deleteFile } from 'redux/user/actions';
import { FormattedMessage } from 'react-intl';
import { Button, ButtonGroup } from 'react-bootstrap';
import api from 'server';
import messages from './messages';

const FileTable = ({ file, deleteFileAction }) => {
  const deleteImage = async () => {
    const { error } = await api.user.deleteFile(file.id);
    if (!error) {
      deleteFileAction(file.id);
    }
  };
  return (
    <tr>
      <td>{file.name}</td>
      <td>
        <a href={file.file} target="_blank">
          <FormattedMessage {...messages.see} />
        </a>
      </td>
      <td>{file.created}</td>
      <td>
        <ButtonGroup>
          <Button variant="danger" onClick={deleteImage}>
            <FormattedMessage {...messages.delete} />
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};

export function mapDispatchToProps(dispatch) {
  return {
    deleteFileAction: id => dispatch(deleteFile(id)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(FileTable);
