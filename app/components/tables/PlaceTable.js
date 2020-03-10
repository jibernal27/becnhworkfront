import React from 'react';
import GenericTable from './GenericTable';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import PlaceDetail from './PlaceDetailRow';
export default function PlacesTable({ places }) {
  const headers = [
    <FormattedMessage {...messages.places.name} />,
    <FormattedMessage {...messages.places.picture} />,
    <FormattedMessage {...messages.places.dateInit} />,
    <FormattedMessage {...messages.places.dateEnd} />,
    <FormattedMessage {...messages.actions} />,
  ];

  return (
    <GenericTable headers={headers}>
      {places.map(p => (
        <PlaceDetail place={p} key={p.id} />
      ))}
    </GenericTable>
  );
}
