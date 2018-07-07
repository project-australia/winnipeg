import { bool, func, shape, string, object } from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signInAction } from '../../../redux/actions/async/authenticationAsyncActions'
import { clearAlert } from '../../../redux/actions/sync'
import { userSelector } from '../../../redux/selectors/authenticationSelectors'
import { ROUTES } from '../../router'
import { LoginForm } from '../components/loginForm'
import { SignInFooter } from '../components/signInFooter'
import { UserPropTypes } from '../propTypes/user.type'

class SignIn extends Component {
  static propTypes = {
    history: object.isRequired,
    signIn: func.isRequired,
    user: UserPropTypes,
    alert: shape({
      showAlert: bool.isRequired,
      message: string
    }).isRequired,
    clearAlerts: func.isRequired
  }

  static navigationOptions = {
    header: null
  }

  navigateTo = (route) => () => {
    this.props.history.push(route)
  }

  footer = (
    <SignInFooter
      navigateToForgotPassword={this.navigateTo(ROUTES.FORGOT_PASSWORD)}
      navigateToSignUp={this.navigateTo(ROUTES.SIGN_UP)}
    />
  )

  onSignIn = async (email, password) => {
    await this.props.signIn(email, password)
  }

  render () {
    if (this.props.user.isLoggedIn()) {
      this.props.history.push(ROUTES.HOME)
      return null
    }

    return (
      <LoginForm
        buttonText='Log In'
        footer={this.footer}
        onClick={this.onSignIn}
        alert={this.props.alert}
        navigateBack={this.navigateTo(ROUTES.HOME)}
        clearAlerts={this.props.clearAlerts}
      />
    )
  }
}

const mapStateToProps = state => ({
  alert: state.authentication.alert,
  user: userSelector(state)
})

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(signInAction(email, password)),
  clearAlerts: () => dispatch(clearAlert())
})

export const SignInScreen = connect(mapStateToProps, mapDispatchToProps)(
  SignIn
)
