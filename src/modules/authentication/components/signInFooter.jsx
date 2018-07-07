import React from 'react'
import PropTypes from 'prop-types'
import { FormButton } from '../../shared/components/buttons'

export const SignInFooter = props => (
  <React.Fragment>
    <p>Forgot your password?</p>
    <p onClick={props.navigateToForgotPassword}>Recover it HERE</p>
    <FormButton
      label='Create an Account'
      onClick={props.navigateToSignUp}
    />
  </React.Fragment>
)

SignInFooter.propTypes = {
  navigateToForgotPassword: PropTypes.func.isRequired,
  navigateToSignUp: PropTypes.func.isRequired
}
