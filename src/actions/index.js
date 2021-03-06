export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

export const removeBook = index => ({
  type: REMOVE_BOOK,
  index,
});

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});
