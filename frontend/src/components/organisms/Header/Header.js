import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { NavButton, Toolbar, Logout} from "../../atoms";
// import logoutIcon from "../../../assets/icons/logout.svg";
import { styles } from "./styles";

class HeaderRaw extends Component {

  render() {
    const { navItems, classes } = this.props;

    return (
      <header className={classes.header}>
        <nav className={classes.navBar}>
          {navItems.map(({ path, text }) => (
            <NavButton key={path} path={path} text={text} />
        ))}
        </nav>
      </header>
    );
  }
}

HeaderRaw.propTypes = {
    navItems: PropTypes.array.isRequired,
    userName: PropTypes.string,
};

export const Header = withStyles(styles)(HeaderRaw);
