import React from 'react'
import { connect } from 'react-redux'
import { UserPropTypes } from '../../authentication/propTypes/user.type'
import { HeaderComponent } from '../components/layout/HeaderComponent'
import { userSelector } from '../../../redux/selectors/authenticationSelectors'

const HeaderBar = ({ user }) => {
  return <HeaderComponent isLoggedIn={user.isLoggedIn()} />
}

HeaderBar.propTypes = {
  user: UserPropTypes
}

const mapStateToProps = state => ({
  user: userSelector(state)
})

export const Header = connect(mapStateToProps)(HeaderBar)
