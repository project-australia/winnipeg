import React, { Component } from 'react'

import { BookList } from '../components/BookList'
import { allBooks } from '../../../services/backend/bookService'

class BookListContainer extends Component {
  state = {
    books: [],
    title: ''
  }

  componentDidMount () {
    this.requestBookList(this.props.location.state.type)
  }

  requestBookList = (type) => {
    switch (type) {
      case 'BUY':
        return this.searchBooksByParam(this.props.location.state.searchParam)
      default:
        return this.getAllBooks()
    }
  }

  getAllBooks = async () => {
    const books = await allBooks()
    this.setState({title: 'All Books', books})
  }

  searchBooksByParam = async () => {
    const books = await allBooks()
    this.setState({title: 'Buying Books', books})
  }

  render () {
    const { books, title } = this.state
    return (
      <BookList
        title={title}
        books={books}
      />
    )
  }
}

export const BookListScreen = BookListContainer
