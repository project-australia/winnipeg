import { bool, func, shape, string } from 'prop-types'
import React, { Component } from 'react'
import { SignUpRequest } from '../../../domain/SignUpRequest'

import { User } from '../../../domain/User'
import { EmailPasswordForm } from '../components/signupForm'

const extractSignUpFormFromState = form => {
  const { name, email, password, school, referredBy } = form

  // TODO: Refactor this constructor
  const user = new User(
    undefined,
    referredBy,
    name,
    email,
    undefined,
    undefined,
    school
  )

  return new SignUpRequest(email, password, user)
}

export class SignUpForm extends Component {
  static propTypes = {
    signUpUser: func.isRequired,
    navigateToSignIn: func.isRequired,
    alert: shape({ showAlert: bool.isRequired, message: string }).isRequired,
    navigateBack: func.isRequired,
    clearAlerts: func.isRequired
  }

  state = {
    name: '',
    email: '',
    school: '',
    password: '',
    loading: false,
    referredBy: '',
    hasKeyboard: false
  }

  keyboardDidShow = () => this.setState({ hasKeyboard: true })
  keyboardDidHide = () => this.setState({ hasKeyboard: false })

  onFormChange = value => {
    this.setState(value)
  }

  doSignUp = async () => {
    this.setState({ loading: true })
    try {
      const form = extractSignUpFormFromState(this.state)
      await this.props.signUpUser(form)
    } catch (err) {
      console.log('err during signup', err)
    } finally {
      this.setState({ loading: false })
    }
  }

  componentWillReceiveProps (nextProps) {
    const { showAlert, message } = nextProps.alert
    if (showAlert) {
      alert(message)
    }
  }

  render () {
    return (
      <EmailPasswordForm
        hasKeyboard={this.state.hasKeyboard}
        form={this.state}
        onChange={this.onFormChange}
        clearAlerts={this.props.clearAlerts}
        onButtonPress={this.doSignUp}
        navigateToSignIn={this.props.navigateToSignIn}
      />
    )
  }
}
