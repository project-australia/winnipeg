import React from 'react'

import ContainerCentered from '../../shared/components/grid/ContainerCentered'
import BookListItem from './BookListItem'

export const BookList = props => {
  return (
    <ContainerCentered>
      <h1>{props.title}</h1>
      <div>
        {props.books.map(book => <BookListItem key={book.id} book={book} />)}
      </div>
    </ContainerCentered>
  )
}
