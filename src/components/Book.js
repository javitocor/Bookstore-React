import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const { book, trigerParent } = props;
  return (
    <div>
      <div className="info">
        <div className="left">
          <div className="book-info">
            <h4>{book.category}</h4>
            <h2>{book.title}</h2>
            <h6>Isaac Asimov</h6>
          </div>
          <div className="buttons">
            <button type="button" disabled>Comments</button>
            <button type="button" onClick={() => trigerParent(book)}>Remove</button>
            <button type="button" disabled>Edit</button>
          </div>
        </div>
        <div className="center">
          <div className="graph" />
          <div className="percentage">
            <h1>69%</h1>
            <h3>Completed</h3>
          </div>
        </div>
        <div className="right">
          <h4>Current Chapter</h4>
          <h2>Chapter 10</h2>
          <div>UPDATE PROGRESS</div>
        </div>
      </div>
    </div>
  );
}
Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  trigerParent: PropTypes.func.isRequired,
};
