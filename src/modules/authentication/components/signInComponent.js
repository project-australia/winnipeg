import React, { Component } from 'react'
import { bool, func, shape, string } from 'prop-types'

import { LoginForm } from '../components/loginForm'
import { FormButton } from '../../shared/components/buttons'

export class SignInComponent extends Component {
  static propTypes = {
    navigateBack: func.isRequired,
    onButtonPress: func.isRequired,
    navigateToSignUp: func.isRequired,
    navigateToForgotPassword: func.isRequired,
    alert: shape({ showAlert: bool.isRequired, message: string }).isRequired,
    clearAlerts: func.isRequired
  }

  renderFooter = () => {
    return (
      <div>
        <div>
          <p>Forgot your password?</p>
          <h1 onClick={this.props.navigateToForgotPassword}>
            <p>Recover it here</p>
          </h1>
        </div>
        <FormButton
          title="Create an Account"
          onPress={this.props.navigateToSignUp}
        />
      </div>
    )
  }

  render () {
    return (
      <LoginForm
        buttonText="Log In"
        alert={this.props.alert}
        footer={this.renderFooter()}
        clearAlerts={this.props.clearAlerts}
        onButtonPress={this.props.onButtonPress}
        navigateBack={this.props.navigateBack}
      />
    )
  }
}
