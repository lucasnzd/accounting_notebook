import React from "react";
import { Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { styles } from "./styles";

const ActionButtonRaw = (props) => {
  const {
    disabled,
    onClick = () => {},
    title,
    selectedStyle,
    disabledStyle,
    titleStyle,
    buttonStyle,
    iconStyle,
    classes,
    icon,
  } = props;

  const classSelected = [selectedStyle ? classes.selected : ""];
  const classDisabled = [disabledStyle ? classes.disabled : ""];

  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      color="primary"
      variant="contained"
      size="medium"
      className={`${classes.button} ${buttonStyle} || ${classSelected} || ${classDisabled}`}
    >
      <div className={classes.container}>
        {icon && (
          <img
            src={icon}
            className={`${classes.buttonIcon} ${iconStyle}`}
            alt="button-icons"
          />
        )}
        <Typography className={titleStyle}>{title}</Typography>
      </div>
    </Button>
  );
};

ActionButtonRaw.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  buttonStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  titleStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  icon: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

ActionButtonRaw.defaultProps = {
  disabled: false,
};

export const ActionButton = withStyles(styles)(ActionButtonRaw);
