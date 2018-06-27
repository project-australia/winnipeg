import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { AppStatusBar } from '../../shared/components/appStatusBar'
import { styles } from './styles/loginFormStyles'

export const FormHeader = props => (
  <View>
    <AppStatusBar />
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  </View>
)

FormHeader.propTypes = {
  title: PropTypes.string.isRequired
}

FormHeader.defaultProps = {
  title: 'Ballard Books'
}
