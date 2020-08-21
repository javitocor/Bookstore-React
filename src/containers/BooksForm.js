/* eslint-disable max-len */
import React from 'react';
import { generateId } from '../sampleBooks';

const BookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const dropMenu = BookCategories.map(category => <option key={category} value={category}>{category}</option>);

class BooksForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: generateId(),
      title: '',
      category= BookCategories[0],
    }
  }
  render(){
    return (
      <form>
    <input className="" type="text" placeholder="Enter the Title" id="title" name="title" />
    <select>
      {dropMenu}
    </select>
    <button type="submit">Add Book</button>
  </form>
    )
  }
}

export default BooksForm;
