import React, { Component } from 'react'

class BookDetailsContainer extends Component {
  render () {
    return (
      <div>
        Book Details Screen
        <h1>
          {this.props.location.state.book.title}
        </h1>
      </div>
    )
  }
}

// TODO: add propTypes para router param

export const BookDetailsScreen = BookDetailsContainer
