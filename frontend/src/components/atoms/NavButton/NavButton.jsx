import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { styles } from "./styles";

class NavButtonRaw extends Component {
  render() {
    const { text, path, classes, buttonStyle } = this.props;
    return (
      <NavLink
        to={path}
        className={`${classes.navButton} ${buttonStyle}`}
        activeClassName={classes["navButton--active"]}
      >
        {text}
      </NavLink>
    );
  }
}

NavButtonRaw.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export const NavButton = withStyles(styles)(NavButtonRaw);
