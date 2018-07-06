import React from 'react'

import { bookProptype } from '../propTypes/book.type'

import './styles/BookItem.css'

const BookItem = ({ book }) => {
  return (
    <div className='bi-wrapper'>
      <div>Title: {book.title}</div>
      <div>Authors: {book.authors.join(', ')}</div>
      <div>Edition: {book.edition}</div>
      <div>Buy {book.prices.buy}</div>
      <div>Rent {book.prices.rent}</div>
    </div>
  )
}

BookItem.propTypes = {
  book: bookProptype.isRequired
}

export default BookItem
