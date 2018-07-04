import PropTypes from 'prop-types'
import React from 'react'

import { FormButton } from '../../shared/components/buttons'
import { FormTextInput } from './formTextInput'

export class ForgotPasswordComponent extends React.Component {
  static propTypes = {
    email: PropTypes.string,
    resetPassword: PropTypes.func.isRequired,
    clearAlerts: PropTypes.func.isRequired
  }

  static defaultProps = {
    email: ''
  }

  constructor (props) {
    super(props)
    this.state = { email: props.email, loading: false }
  }

  setEmail = (emailValue) => {
    const email = emailValue.trim()
    this.setState({ email })
  }

  onButtonPress = async () => {
    this.setState({ loading: true })
    await this.props.resetPassword(this.state.email)
    this.setState({ loading: false })
  }

  render () {
    return (
      <div>
        <FormTextInput
          onChange={this.setEmail}
          label="Your email address"
          value={this.state.email}
        />
        <FormButton
          label="Reset Password"
          onClick={this.onButtonPress}
        />
      </div>
    )
  }
}
