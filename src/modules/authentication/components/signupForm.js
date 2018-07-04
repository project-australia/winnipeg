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

  setUserName = event => this.props.onChange({ name: event.target.value })
  setEmail = event => this.props.onChange({ email: event.target.value })
  setPassword = event => this.props.onChange({ password: event.target.value })
  setSchool = event => this.props.onChange({ school: event.target.value })
  setReferredBy = event => this.props.onChange({ referredBy: event.target.value })

  render () {
    return (
      <form>
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
      </form>
    )
  }
}
