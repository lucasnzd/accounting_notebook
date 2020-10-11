import React, { PureComponent } from "react";
import { withStyles, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { styles } from "./styles";

class FilterNavItemRaw extends PureComponent {
  render() {
    const { disabled, selected, onClick, title, classes } = this.props;

    return (
      <Button
        disabled={disabled}
        onClick={onClick}
        className={`${classes.button} ${selected ? classes.selected : ""} ${
          disabled ? classes.disabled : ""
        }`}
      >
        {title}
      </Button>
    );
  }
}

FilterNavItemRaw.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  selected: PropTypes.bool,
};

FilterNavItemRaw.defaultProps = {
  disabled: false,
  selected: false,
};

export const FilterNavItem = withStyles(styles)(FilterNavItemRaw);
