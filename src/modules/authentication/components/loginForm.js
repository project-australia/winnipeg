import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import PropTypes, { func } from 'prop-types'

import { FormHeader } from './formHeader'
import { FormTextInput } from './formTextInput'
import { FormButton } from '../../shared/components/buttons'
import { LoadingOverlay } from '../../shared/components/loadingOverlay'
import { BackButtonFloating } from '../../shared/components/buttons/backButtonFloating'

import { styles } from './styles/loginFormStyles'
import { Colors } from '../../../constants'

export class LoginForm extends Component {
  static defaultProps = { footer: <View /> }
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

  componentWillReceiveProps(nextProps) {
    const { showAlert, message } = nextProps.alert
    if (showAlert) {
      // alert(message)
      Alert.alert(
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

  render() {
    return (
      <LoadingOverlay style={styles.screen} isLoading={this.state.loading}>
        <FormHeader />
        <FormTextInput
          autoCapitalize="none"
          autoFocus
          blurOnSubmit={false}
          keyboardType="email-address"
          onChangeText={this.setEmail}
          onSubmitEditing={this.focusPassword}
          placeholder="Email address"
          returnKeyType={'next'}
          selectionColor={Colors.secondary500}
          style={styles.itemSpacing}
          value={this.state.email}
        />
        <FormTextInput
          onChangeText={this.setPassword}
          onSubmitEditing={this.onButtonPress}
          placeholder="Password"
          ref={ref => {
            this.passwordInput = ref
          }}
          returnKeyType={'done'}
          secureTextEntry
          selectionColor={Colors.secondary500}
          style={styles.itemSpacing}
          value={this.state.password}
        />
        <FormButton
          title={this.props.buttonText}
          onPress={this.onButtonPress}
          style={styles.itemSpacing}
        />
        {this.props.footer}
        <BackButtonFloating onPress={this.props.navigateBack} />
      </LoadingOverlay>
    )
  }
}
