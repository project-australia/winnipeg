import { bool, func, shape, string } from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signInAction } from '../../../redux/actions/async/authenticationAsyncActions'
import { clearAlert } from '../../../redux/actions/sync'
import { NOT_LOGGED_IN } from '../../../redux/reducers/authentication/constants'
import { userSelector } from '../../../redux/selectors/authenticationSelectors'
import { LoginForm } from '../components/loginForm'
import { SignInFooter } from '../components/signInFooter'
import { UserPropTypes } from '../propTypes/user.type'

class SignIn extends Component {
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

      // TODO: If user is logged in redirect them
      // nextProps.navigation.navigate(nextProps.redirectTo)
    }
  }

  navigateTo = (route) => () => {
    window.alert(route)
  }

  footer = (
    <SignInFooter
      navigateToForgotPassword={this.navigateTo('Forgot Password')}
      navigateToSignUp={this.navigateTo('SignUpForm')}
    />
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
        navigateBack={this.navigateTo('Go Back')}
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

export const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(
  SignIn
)
