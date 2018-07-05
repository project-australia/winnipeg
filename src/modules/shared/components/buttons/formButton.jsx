import React from 'react'
import { func, string } from 'prop-types'

export const FormButton = props => (
  <button type='button' onClick={props.onClick}>
    {props.label}
  </button>
)

FormButton.propTypes = {
  onClick: func.isRequired,
  label: string.isRequired
}
