import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';

export default function App() {
  return (
    <div>
      <Header />
      <BooksForm />
      <BooksList />
    </div>
  );
}
