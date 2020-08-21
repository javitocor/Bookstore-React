import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import booksReducer from './reducers/books';
import './index.css';
import App from './components/App';
import sampleBooks from './sampleBooks';

const store = createStore(booksReducer, sampleBooks);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
