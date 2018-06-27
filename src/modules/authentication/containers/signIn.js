import { bool, func, shape, string } from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signInAction } from '../../../redux/actions/async/authenticationAsyncActions'
import { clearAlert } from '../../../redux/actions/sync'
import { NOT_LOGGED_IN } from '../../../redux/reducers/authentication/constants'
import { LoginForm } from '../components/loginForm'
import { SignInFooter } from '../components/signInFooter'
import { UserPropTypes } from '../propTypes/user'

const navigateTo = () => {}

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

  footer = (
    <SignInFooter navigateToForgotPassword={navigateTo}
      navigateToSignUp={navigateTo()}/>
  )

  onSignIn = async (email, password) => {
    await this.props.signIn(email, password)
  }

  render () {
    return (
      <LoginForm
        buttonText='Log In'
        footer={this.footer}
        onClick={this.onSignIn}
        alert={this.props.alert}
        clearAlerts={this.props.clearAlerts}
        navigateBack={this.props.navigateBack}
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
