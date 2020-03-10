import React from 'react';
import GenericTable from './GenericTable';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FileDetail from './FileDetailRow';
export default function FileTable({ files }) {
  const headers = [
    <FormattedMessage {...messages.file.name} />,
    <FormattedMessage {...messages.file.file} />,
    <FormattedMessage {...messages.file.createdAt} />,
    <FormattedMessage {...messages.actions} />,
  ];

  return (
    <GenericTable headers={headers}>
      {files.map(f => (
        <FileDetail file={f} key={f.id} />
      ))}
    </GenericTable>
  );
}
