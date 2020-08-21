import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const { book } = props;
  return (
    <tr id={book.id}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
  );
}
Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};
