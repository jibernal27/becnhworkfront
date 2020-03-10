import React from 'react';
import { Table } from 'react-bootstrap';

export default function GenericTable({ headers, children }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {headers.map((v, i) => (
            <th key={i}>{v}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
}
