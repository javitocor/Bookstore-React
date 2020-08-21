import React, { Component } from 'react';

export default class BooksForm extends Component {
  constructor(props) {
    super(props);
    const BookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  }

  render() {
    return (
      <form>
        <input className="" type="text" placeholder="Enter the Title" />
        <select>
          {this.BookCategories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>

        <button type="submit">create</button>
      </form>
    );
  }
}
