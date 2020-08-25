import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { generateId } from '../sampleBooks';
import { createBook } from '../actions/index';

const BookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const dropMenu = BookCategories.map(
  category => <option key={category} value={category}>{category}</option>,
);

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

  handleChange(e) {
    if (e.target.name === 'title') {
      this.setState({ title: e.target.value });
    } else if (e.target.name === 'category') {
      this.setState({ category: e.target.value });
    }
  }

  handleSubmit(event) {
    const { createBook } = this.props;
    createBook(this.state);
    this.setState({
      id: generateId(),
      title: '',
      category: BookCategories[0],
    });
    event.preventDefault();
  }

  render() {
    const { title } = this.state;
    return (
      <div className="cont">
        <div className="form-container">
          <h3>ADD NEW BOOK</h3>
          <form>
            <input type="text" id="title" name="title" placeholder="Book Title" onChange={this.handleChange} value={title} />

            <select id="category" name="category" onChange={this.handleChange}>
              <option key="category" value="category" selected>Category</option>
              {dropMenu}
            </select>
            <button type="submit" onClick={this.handleSubmit}>Add Book</button>
          </form>
        </div>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
