import React from 'react'
import { func, string } from 'prop-types'

export const FormTextInput = (props) => (
  <label>
    {props.label}:
    <input
      type={props.type}
      name={props.label}
      value={props.value}
      onChange={props.onChange}
      autoComplete='off'
    />
  </label>
)

FormTextInput.propTypes = {
  onChange: func.isRequired,
  label: string.isRequired,
  value: string.isRequired,
  type: string
}

FormTextInput.defaultProps = {
  type: 'text'
}
