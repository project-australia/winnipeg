import React from 'react'

import BookItem from './BookItem'

import './styles/BookListHome.css'

const books = [{key: 1}, {key: 2}, {key: 3}, {key: 4}, {key: 5}]
const BookListHomeContainer = () => {
  return (
    <div className='blh-wrapper'>
      <div>
        <h1>Recently Added</h1>
      </div>
      <div className='blh-book-list'>
        { books.map(book => <BookItem key={book.key}/>) }
      </div>
    </div>
  )
}

export const BookListHome = BookListHomeContainer
