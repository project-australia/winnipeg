import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'

const ContainerFullWidth = (props) => {
  return (
    <Grid className={props.className} centered columns={1} padded>
      <Grid.Column mobile={16} tablet={16} computer={16}>
        {props.children}
      </Grid.Column>
    </Grid>
  )
}

ContainerFullWidth.propTypes = {
  className: PropTypes.string
}

ContainerFullWidth.defaultProps = {
  className: ''
}

export default ContainerFullWidth
