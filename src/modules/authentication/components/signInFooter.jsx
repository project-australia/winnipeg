import React from 'react'
import PropTypes from 'prop-types'
import { FormButton } from '../../shared/components/buttons'

export const SignInFooter = props => (
  <div>
    <div>
      <p>Forgot your password?</p>
      <p onClick={props.navigateToForgotPassword}>Recover it HERE</p>
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
