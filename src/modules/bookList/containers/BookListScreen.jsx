import React, { Component } from 'react'

import { BookList } from '../components/BookList'

class BookListContainer extends Component {
  render () {
    return (
      <BookList />
    )
  }
}

export const BookListScreen = BookListContainer
