import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";

const ContainerPadded = props => {
  return (
    <Grid className={props.className} centered columns={1} padded>
      <Grid.Column mobile={14} tablet={14} computer={14}>
        {props.children}
      </Grid.Column>
    </Grid>
  );
};

ContainerPadded.propTypes = {
  className: PropTypes.string,
};

ContainerPadded.defaultProps = {
  className: "",
};

export default ContainerPadded;
