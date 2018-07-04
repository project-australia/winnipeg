import PropTypes, { func, string } from 'prop-types'
import React, { Component } from 'react'
import { FormButton } from '../../shared/components/buttons'
import { hasMinimumSizeOf, isNotEmpty, isValidEmail } from '../validation'
import { FormHeader } from './formHeader'
import { FormTextInput } from './formTextInput'

export const signupFormType = PropTypes.shape({
  name: string.isRequired,
  school: string.isRequired,
  referredBy: string.isRequired,
  email: string.isRequired,
  password: string.isRequired
}).isRequired

export class EmailPasswordForm extends Component {
  static propTypes = {
    form: signupFormType,
    clearAlerts: func.isRequired
  }

  setUserName = name => this.props.onChange({ name })
  setEmail = email => this.props.onChange({ email })
  setPassword = password => this.props.onChange({ password })
  setSchool = school => this.props.onChange({ school })
  setReferredBy = referredBy => this.props.onChange({ referredBy })

  focusInput = inputName => this[inputName].focus()

  render () {
    return (
      <div>
        <FormHeader />
        <div>
          <FormTextInput
            onChange={this.setUserName}
            label="Name"
            validationCondition={isNotEmpty}
            value={this.props.form.name}
          />
          <FormTextInput
            onChange={this.setEmail}
            label="Email address"
            validationCondition={isValidEmail}
            value={this.props.form.email}
          />
          <FormTextInput
            validationCondition={hasMinimumSizeOf(6)}
            onChange={this.setPassword}
            value={this.props.form.password}
            label="Password"
            type="password"
          />
          <FormTextInput
            validationCondition={isNotEmpty}
            onChange={this.setSchool}
            value={this.props.form.school}
            label="School"
          />
          <FormTextInput
            onChange={this.setReferredBy}
            value={this.props.form.referredBy}
            label="Rep's email (optional)"
          />
        </div>SignUpContainer
        {!this.props.hasKeyboard && (
          <div>
            <FormButton
              label={'Create your account'}
              onClick={this.props.handleLogin}
            />
            <FormButton
              label="Log in instead"
              onClick={this.props.navigateToSignIn}
            />
          </div>
        )}
      </div>
    )
  }
}
