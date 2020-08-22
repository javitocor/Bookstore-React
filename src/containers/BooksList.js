/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

class BooksList extends Component {
  constructor(props) {
    super(props);
  }

  handleRemove=book => {
    this.props.removeBook(this.props.books.findIndex(book1 => book1 === book));
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Title</td>
              <td>Category</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>

            {this.props.books.map(
              book => <Book key={book.id} book={book} trigerParent={this.handleRemove} />,
            )}

          </tbody>
        </table>
      </div>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({ books: state.books });
const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
