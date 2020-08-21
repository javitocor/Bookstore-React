/* eslint-disable max-len */
import React from 'react';

const BookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const dropMenu = BookCategories.map(category => <option key={category} value={category}>{category}</option>);

const BooksForm = () => (
  <form>
    <input className="" type="text" placeholder="Enter the Title" id="title" name="title" />
    <select>
      {dropMenu}
    </select>
    <button type="submit">Add Book</button>
  </form>
);

export default BooksForm;
