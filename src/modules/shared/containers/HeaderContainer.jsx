import React from 'react'
import { connect } from 'react-redux'
import { UserPropTypes } from '../../authentication/propTypes/user.type'

import { Header } from '../components/layout/Header'

import { userSelector } from '../../../redux/selectors/authenticationSelectors'

const HeaderBar = ({ user }) => {
  return <Header isLoggedIn={user.isLoggedIn()} />
}

HeaderBar.propTypes = {
  user: UserPropTypes
}

const mapStateToProps = state => ({
  user: userSelector(state)
})

export const HeaderContainer = connect(mapStateToProps)(HeaderBar)
