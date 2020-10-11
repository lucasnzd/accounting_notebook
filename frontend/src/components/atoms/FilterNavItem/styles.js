import { palette } from "../../../styles/colors";

export const styles = (theme) => ({
  button: {
    color: palette.text.primary,
    fontWeight: "500",
    textTransform: "none",
    padding: "0rem 2rem 0rem 2rem",
    minHeight: "7rem",
    boxShadow: "0px 8px 12px 0px rgb(143,155,174, 0.4)",
    width: "10rem",
    height: "8rem",
    borderRadius: "5px",
    fontSize: "0.9rem",
  },
  selected: {
    background: palette.background.primary.light,
    color: palette.text.secondary,
    "&:hover": {
      background: palette.background.primary.light,
    },
  },
  disabled: {
    backgroundColor: palette.background.secondary.main,
    opacity: "0.7",
  },
});
