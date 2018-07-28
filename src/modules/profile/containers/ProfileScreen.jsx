import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOutAction } from '../../../redux/actions/async/index'
import { userSelector } from '../../../redux/selectors/authenticationSelectors'
import { UserPropTypes } from '../../authentication/propTypes/user.type'

class Profile extends Component {
  static propTypes = {
    user: UserPropTypes
  }

  render () {
    return (
      <React.Fragment>
        <h1 onClick={this.props.logOut}>Hello {this.props.user.email}, Click to Log Out</h1>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: userSelector(state)
})

const mapDispatchToProps = {
  logOut: logOutAction
}

export const ProfileScreen = connect(mapStateToProps, mapDispatchToProps)(Profile)
