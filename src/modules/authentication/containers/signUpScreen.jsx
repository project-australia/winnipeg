import { bool, func, shape, string, object } from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signUpAction } from '../../../redux/actions/async/authenticationAsyncActions'
import { clearAlert } from '../../../redux/actions/sync'
import { ROUTES } from '../../router'
import { SignUpForm } from '../components/signUpForm'

class SignUpPresenter extends Component {
  static navigationOptions = {
    header: null
  }

  static propTypes = {
    history: object.isRequired,
    signUp: func.isRequired,
    alert: shape({
      showAlert: bool.isRequired,
      message: string
    }).isRequired,
    clearAlerts: func.isRequired
  }

  onSignUp = async signUpForm => {
    await this.props.signUp(signUpForm)
  }

  navigateToSignInScreen = () => {
    this.props.history.push(ROUTES.SIGN_IN)
  }

  navigateBack = () => {
    this.props.history.goBack()
  }

  render () {
    if (this.props.user.isLoggedIn()) {
      this.props.history.push(ROUTES.HOME)
      return null
    }

    return (
      <SignUpForm
        buttonText="SIGN UP"
        alert={this.props.alert}
        clearAlerts={this.props.clearAlerts}
        signUpUser={this.onSignUp}
        navigateToSignIn={this.navigateToSignInScreen}
        navigateBack={this.navigateBack}
      />
    )
  }
}

const mapStateToProps = state => ({
  alert: state.authentication.alert,
  user: state.authentication.user
})

const mapDispatchToProps = dispatch => ({
  signUp: form => dispatch(signUpAction(form)),
  clearAlerts: () => dispatch(clearAlert())
})

export const SignUpScreen = connect(mapStateToProps, mapDispatchToProps)(
  SignUpPresenter
)
