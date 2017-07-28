import React, { Component } from 'react';
import BookList from '../containers/book-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React simple starter</h1>
        <BookList />
      </div>
    );
  }
}
