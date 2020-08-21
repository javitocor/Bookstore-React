import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <div>
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Title</td>
          <td>Category</td>
        </tr>
      </thead>
      <tbody>

        {books.map(book => <Book key={book.id} book={book} />)}

      </tbody>
    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps, null)(BooksList);
