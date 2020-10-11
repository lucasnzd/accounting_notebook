import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { NavButton } from "../../atoms";
import { styles } from "./styles";

class NavBarRaw extends Component {
  render() {
    const { navItems, classes } = this.props;

    return (
      <nav className={classes.navBar}>
        {navItems.map(({ path, text }) => (
          <NavButton key={path} path={path} text={text} />
        ))}
      </nav>
    );
  }
}

NavBarRaw.propTypes = {
    navItems: PropTypes.array.isRequired,
};

export const NavBar = withStyles(styles)(NavBarRaw);
