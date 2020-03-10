import React from 'react';
import { Table } from 'react-bootstrap';

export default function GenericTable({ headers, children }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {headers.map(v => (
            <th>{v}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
}
