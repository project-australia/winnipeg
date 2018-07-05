import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'

const ContainerCentered = (props) => {
  return (
    <Grid className={props.className} centered columns={1} padded>
      <Grid.Column mobile={16} tablet={14} computer={14}>
        {props.children}
      </Grid.Column>
    </Grid>
  )
}

ContainerCentered.propTypes = {
  className: PropTypes.string
}

ContainerCentered.defaultProps = {
  className: ''
}

export default ContainerCentered
