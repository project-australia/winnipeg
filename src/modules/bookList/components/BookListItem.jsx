import React from 'react'

const BookListItem = props => {
  return (
    <div style={{borderBottom: '1px solid black'}}>
      {props.book.id || props.book.title}
    </div>
  )
}

export default BookListItem
