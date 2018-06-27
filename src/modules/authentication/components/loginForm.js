import React, { Component } from 'react'
import PropTypes, { func } from 'prop-types'

import { FormHeader } from './formHeader'
import { FormTextInput } from './formTextInput'
import { FormButton } from '../../shared/components/buttons'

export class LoginForm extends Component {
  static defaultProps = { footer: <div /> }
  static propTypes = {
    footer: PropTypes.object,
    buttonText: PropTypes.string.isRequired,
    alert: PropTypes.shape({
      showAlert: PropTypes.bool.isRequired,
      message: PropTypes.string
    }).isRequired,
    navigateBack: PropTypes.func.isRequired,
    clearAlerts: func.isRequired
  }

  state = {
    email: '',
    password: '',
    loading: false
  }

  setEmail = email => this.setState({ email })
  setPassword = password => this.setState({ password })

  onButtonPress = async () => {
    this.setState({ loading: true })
    const { email, password } = this.state
    await this.props.onButtonPress(email, password)
    this.setState({ loading: false })
  }

  componentWillReceiveProps (nextProps) {
    const { showAlert, message } = nextProps.alert
    if (showAlert) {
      window.alert(
        'Reset Password',
        message,
        [
          { text: 'Ok', onPress: () => {}, style: 'cancel' }
        ],
        { cancelable: true }
      )
      this.props.clearAlerts()
    }
  }

  focusPassword = () => this.passwordInput.focus()

  render () {
    return (
      <div>
        <FormHeader />
        <FormTextInput
          onChange={this.setEmail}
          label="Email address"
          value={this.state.email}
        />
        <FormTextInput
          onChange={this.setPassword}
          label="Password"
          value={this.state.password}
        />
        <FormButton
          title={this.props.buttonText}
          onPress={this.onButtonPress}
        />
        {this.props.footer}
      </div>
    )
  }
}
