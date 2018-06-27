import React from 'react'
import { func } from 'prop-types'

export const FormButton = props => {
  return (
    <div
      onClick={props.onPress}
    >
      <div>
        <p>
          {props.title}
        </p>
        <p>
          {props.subtitle}
        </p>
      </div>
    </div>
  )
}

FormButton.propTypes = {
  onPress: func.isRequired
}
