import React from 'react'
import { Button } from 'semantic-ui-react'

import { bookProptype } from '../propTypes/book.type'
import { ROUTES } from '../../router'
import { history } from '../../../config/historyRouter'

import './styles/BookItem.css'

const navigateToBookDetail = (book, type) => history.push({
  pathname: ROUTES.BOOKDETAILS,
  state: { book, type }
})

const BookItem = ({ book }) => {
  return (
    <div className='bi-wrapper'>
      <div>Title: {book.title}</div>
      <div>Authors: {book.authors.join(', ')}</div>
      <div>Edition: {book.edition}</div>
      <div>
        <Button onClick={() => navigateToBookDetail(book, 'BUY')}>
          Buy {book.prices.buy}
        </Button>
        <Button onClick={() => navigateToBookDetail(book, 'RENT')}>
          Rent {book.prices.rent}
        </Button>
      </div>
    </div>
  )
}

BookItem.propTypes = {
  book: bookProptype.isRequired
}

export default BookItem
