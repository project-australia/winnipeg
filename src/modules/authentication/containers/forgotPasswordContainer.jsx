import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { forgotPasswordAction } from '../../../redux/actions'
import { clearAlert } from '../../../redux/actions/sync'
import { ForgotPasswordComponent } from '../components/forgotPasswordComponent'

const ForgotPassword = props => (
  <ForgotPasswordComponent
    resetPassword={props.resetPassword}
    alert={props.alert}
    clearAlerts={props.clearAlerts}
  />
)

const mapStateToProps = state => ({
  alert: state.authentication.alert
})

const mapDispatchToProps = dispatch => ({
  resetPassword: email => dispatch(forgotPasswordAction(email)),
  clearAlerts: () => dispatch(clearAlert())
})

ForgotPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  alert: PropTypes.shape({
    showAlert: PropTypes.bool.isRequired,
    message: PropTypes.string
  }).isRequired
}

export const ForgotPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword)
