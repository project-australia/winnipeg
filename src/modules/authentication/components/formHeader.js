import React from 'react'
import PropTypes from 'prop-types'

export const FormHeader = props => (
  <p>{props.title}</p>
)

FormHeader.propTypes = {
  title: PropTypes.string.isRequired
}

FormHeader.defaultProps = {
  title: 'Ballard Books'
}
