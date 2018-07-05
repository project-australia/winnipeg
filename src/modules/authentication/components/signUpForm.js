import { func, string, bool, shape } from 'prop-types'
import React, { Component } from 'react'
import { SignUpRequest } from '../../../domain/signUpRequest'

import { User } from '../../../domain/user'
import { FormButton } from '../../shared/components/buttons'
import { hasMinimumSizeOf, isNotEmpty, isValidEmail } from '../validation'
import { FormHeader } from './formHeader'
import { FormTextInput } from './formTextInput'

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
    referredBy: ''
  }

  onFormChange = value => { this.setState(value) }
  setUserName = event => { this.onFormChange({ name: event.target.value }) }
  setEmail = event => { this.onFormChange({ email: event.target.value }) }
  setPassword = event => { this.onFormChange({ password: event.target.value }) }
  setSchool = event => { this.onFormChange({ school: event.target.value }) }
  setReferredBy = event => { this.onFormChange({ referredBy: event.target.value }) }

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
      <form>
        <FormHeader />
        <div>
          <FormTextInput
            onChange={this.setUserName}
            label="Name"
            validationCondition={isNotEmpty}
            value={this.state.name}
          />
          <FormTextInput
            onChange={this.setEmail}
            label="Email address"
            validationCondition={isValidEmail}
            value={this.state.email}
          />
          <FormTextInput
            validationCondition={hasMinimumSizeOf(6)}
            onChange={this.setPassword}
            value={this.state.password}
            label="Password"
            type="password"
          />
          <FormTextInput
            validationCondition={isNotEmpty}
            onChange={this.setSchool}
            value={this.state.school}
            label="School"
          />
          <FormTextInput
            onChange={this.setReferredBy}
            value={this.state.referredBy}
            label="Rep's email (optional)"
          />
          <div>
            <FormButton
              label={'Create your account'}
              onClick={this.doSignUp}
            />
            <FormButton
              label="Log in instead"
              onClick={this.props.navigateToSignIn}
            />
          </div>
        </div>
      </form>
    )
  }
}
