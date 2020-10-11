import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { styles } from "./styles";

const LoaderRaw = (props) => {
  const { loaderStyle, size, classes, color, loading } = props;

  return (
    <div className={classes.loaderContainer}>
      <PulseLoader
        css={loaderStyle}
        size={Number(size)}
        color={color}
        loading={loading}
        margin={20}
      />
    </div>
  );
};

LoaderRaw.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  loaderStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  color: PropTypes.string,
  classes: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

LoaderRaw.defaultProps = {};

export const Loader = withStyles(styles)(LoaderRaw);
