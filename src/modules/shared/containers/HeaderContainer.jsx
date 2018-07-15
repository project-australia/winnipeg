import React from 'react'
import { connect } from 'react-redux'

import { Header } from '../components/layout/Header'

import { userSelector } from '../../../redux/selectors/authenticationSelectors'

const HeaderBar = ({ user }) => {
  const isLoggedIn = user.id !== undefined
  return <Header isLoggedIn={isLoggedIn} />
}

const mapStateToProps = state => ({
  user: userSelector(state)
})

export const HeaderContainer = connect(mapStateToProps)(HeaderBar)
