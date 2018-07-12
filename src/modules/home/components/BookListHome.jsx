import React from 'react'
import { Link } from 'react-router-dom'
import { string, arrayOf } from 'prop-types'

import BookItem from './BookItem'

import { bookProptype } from '../propTypes/book.type'

import './styles/BookListHome.css'

const BookListHomeContainer = ({ title, books }) => {
  return (
    <div className='blh-wrapper'>
      <div className='blh-title-box'>
        <span className='title'>{title}</span>
        <span><Link to='/booklist'>View All</Link></span>
      </div>
      <div className='blh-book-list'>
        {books.map(book => <BookItem key={book.id} book={book} />)}
      </div>
    </div>
  )
}

BookListHomeContainer.propTypes = {
  books: arrayOf(bookProptype).isRequired,
  title: string.isRequired
}

export const BookListHome = BookListHomeContainer
