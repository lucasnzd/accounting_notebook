import { palette } from "../../../styles";

export const styles = (theme) => ({
  navButton: {
    width: "100%",
    height: "100%",
    backgroundColor: palette.background.primary.main,
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 250ms ease-in-out",
    color: palette.background.secondary.main,
    fontSize: "1.5rem",
    "&:hover": {
      opacity: 0.9,
    },
    "&:active": {
      opacity: 0.7,
    },
  },
  "navButton--active": {
    backgroundColor: palette.background.primary.light,
    borderBottom: `6px solid ${palette.border.primary.main}`,
  },
  disabled: {
    backgroundColor: palette.background.secondary.light,
    opacity: "0.7",
    cursor: "no-cursor",
  },
});
