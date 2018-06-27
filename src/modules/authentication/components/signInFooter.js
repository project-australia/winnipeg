import React from 'react'
import PropTypes from 'prop-types'
import { FormButton } from '../../shared/components/buttons'

export const SignInFooter = props => (
  <div>
    <div>
      <p>Forgot your password?</p>
      <h1 onClick={props.navigateToForgotPassword}>
        <p>Recover it here</p>
      </h1>
    </div>
    <FormButton
      label='Create an Account'
      onClick={props.navigateToSignUp}
    />
  </div>
)

SignInFooter.propTypes = {
  navigateToForgotPassword: PropTypes.func.isRequired,
  navigateToSignUp: PropTypes.func.isRequired
}
