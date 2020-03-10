import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { deletePlace } from 'redux/user/actions';
import { FormattedMessage } from 'react-intl';
import { Button, ButtonGroup } from 'react-bootstrap';
import api from 'server';
import messages from './messages';

const FileTable = ({ place, deletePlaceAction }) => {
  const deleteImage = async () => {
    const { error } = await api.user.deletePlace(place.id);
    if (!error) {
      deletePlaceAction(place.id);
    }
  };
  return (
    <tr>
      <td>{place.name}</td>
      <td>
        <a href={place.picture} target="_blank">
          <img
            src={place.picture}
            className="img-fluid img-thumbnail table-image "
            alt={place.name}
          />
        </a>
      </td>
      <td>{place.date_init}</td>
      <td>{place.date_end}</td>
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
    deletePlaceAction: id => dispatch(deletePlace(id)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(FileTable);
