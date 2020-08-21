import React from 'react';
import PropTypes from 'prop-types';

const BookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const dropMenu = BookCategories.map(
  category => <option key={category} value={category}>{category}</option>,
);

const CategoryFilter = ({ handleFilterChange }) => (
  <select onChange={event => handleFilterChange(event)}>
    <option key="All" value="All">All</option>
    {dropMenu}
  </select>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
