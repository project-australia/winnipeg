import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Header } from '../components/layout/Header'

import { userSelector } from '../../../redux/selectors/authenticationSelectors'

class HeaderBar extends Component {
  render () {
    const isLoggedIn = this.props.user.id !== undefined
    return (
      <Header
        isLoggedIn={isLoggedIn}
      />
    )
  }
}

const mapStateToProps = state => ({
  user: userSelector(state)
})

export const HeaderContainer = connect(mapStateToProps)(HeaderBar)
