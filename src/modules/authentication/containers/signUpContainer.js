import { bool, func, shape, string } from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signUpAction } from '../../../redux/actions/async/authenticationAsyncActions'
import { clearAlert } from '../../../redux/actions/sync'
import { SignUp } from '../components/signUp'

class SignUpPresenter extends Component {
  static navigationOptions = {
    header: null
  }

  static propTypes = {
    signUp: func.isRequired,
    alert: shape({
      showAlert: bool.isRequired,
      message: string
    }).isRequired,
    clearAlerts: func.isRequired
  }

  componentWillUpdate (nextProps) {
    // TODO: Rever esquema de navegaçao.
    // const isUserLoggedIn = nextProps.user && nextProps.user !== NOT_LOGGED_IN
    // if (isUserLoggedIn) {
    //   nextProps.navigation.navigate('Home')
    // }
  }

  onSignUp = async signUpForm => {
    await this.props.signUp(signUpForm)
  }

  navigateToSignInScreen = () => {
    this.props.navigation.navigate('SignIn')
  }

  navigateBack = () => {
    this.props.navigation.goBack()
  }

  render () {
    return (
      <SignUp
        buttonText="SIGN UP"
        alert={this.props.alert}
        clearAlerts={this.props.clearAlerts}
        signUpUser={this.onSignUp}
        navigateToSignIn={this.navigateToSignInScreen}
        navigateBack={this.navigateBack}
      />
    )
  }
}

const mapStateToProps = state => ({
  alert: state.authentication.alert,
  user: state.authentication.user
})

const mapDispatchToProps = dispatch => ({
  signUp: form => dispatch(signUpAction(form)),
  clearAlerts: () => dispatch(clearAlert())
})

export const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(
  SignUpPresenter
)
