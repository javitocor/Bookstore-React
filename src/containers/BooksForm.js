/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import { generateId } from '../sampleBooks';
import { createBook } from '../actions/index';

const BookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const dropMenu = BookCategories.map(category => <option key={category} value={category}>{category}</option>);

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: generateId(),
      title: '',
      category: BookCategories[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'title') {
      this.setState({
        title: event.target.value,
      });
    } else {
      this.setState({
        category: event.target.value,
      });
    }
  }

  handleSubmit(event) {
    this.props.createBook(this.state);
    this.setState({
      id: generateId(),
      title: '',
      category: BookCategories[0],
    });
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <input className="" type="text" placeholder="Enter the Title" id="title" name="title" onChange={this.handleChange} />
        <select onChange={this.handleChange}>
          {dropMenu}
        </select>
        <button type="submit" onClick={this.handleSubmit}>Add Book</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
