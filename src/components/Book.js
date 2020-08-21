import React from 'react';
import Proptypes, { object } from 'prop-types';

export default function Book(props) {
  const { book } = props;
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
  );
}
Book.prototype = {
  book: Proptypes.instanceOf(Object).isRequired,
};
