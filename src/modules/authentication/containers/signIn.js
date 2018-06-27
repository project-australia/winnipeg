import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bool, func, shape, string } from 'prop-types'

import { signInAction } from '../../../redux/actions/async/authenticationAsyncActions'
import { clearAlert } from '../../../redux/actions/sync'
import { NOT_LOGGED_IN } from '../../../redux/reducers/authentication/constants'
import { SignInComponent } from '../components/signInComponent'
import { UserPropTypes } from '../propTypes/user'

const navigateTo = () => {}

const onSignIn = props => async (email, password) => {
  try {
    await props.signIn(email, password)
  } catch (error) {
    alert('Error happened during sign in', error)
  }
}

class SignInContainer extends Component {
  static propTypes = {
    signIn: func.isRequired,
    redirectTo: string.isRequired,
    user: UserPropTypes,
    alert: shape({
      showAlert: bool.isRequired,
      message: string
    }).isRequired,
    clearAlerts: func.isRequired
  }

  static defaultProps = {
    redirectTo: 'Home'
  }

  static navigationOptions = {
    header: null
  }

  state = {
    customRedirectTo: false
  }

  componentWillUpdate (nextProps) {
    const isUserLoggedIn = nextProps.user && nextProps.user !== NOT_LOGGED_IN
    if (isUserLoggedIn) {
      if (this.state.customRedirectTo) {
        return nextProps.navigation.navigate(this.state.customRedirectTo)
      }
      nextProps.navigation.navigate(nextProps.redirectTo)
    }
  }

  render () {
    return (
      <SignInComponent
        alert={this.props.alert}
        onButtonPress={onSignIn(this.props)}
        clearAlerts={this.props.clearAlerts}
        navigateBack={navigateTo}
        navigateToSignUp={navigateTo}
        navigateToForgotPassword={navigateTo}
      />
    )
  }
}

const mapStateToProps = state => ({
  alert: state.authentication.alert,
  user: state.authentication.user
})

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(signInAction(email, password)),
  clearAlerts: () => dispatch(clearAlert())
})

export const SignIn = connect(mapStateToProps, mapDispatchToProps)(
  SignInContainer
)
