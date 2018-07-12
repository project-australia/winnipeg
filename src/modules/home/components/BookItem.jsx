import React from 'react'
import { Button } from 'semantic-ui-react'

import { bookProptype } from '../propTypes/book.type'

import './styles/BookItem.css'

const BookItem = ({ book }) => {
  return (
    <div className='bi-wrapper'>
      <div>Title: {book.title}</div>
      <div>Authors: {book.authors.join(', ')}</div>
      <div>Edition: {book.edition}</div>
      <Button onClick={() => console.log('book details')}>Buy {book.prices.buy}</Button>
      <Button onClick={() => console.log('book details')}>Rent {book.prices.rent}</Button>
    </div>
  )
}

BookItem.propTypes = {
  book: bookProptype.isRequired
}

export default BookItem
