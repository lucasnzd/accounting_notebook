import { palette } from "../../../styles/colors";

export const styles = (theme) => ({
  container: {},
  button: {
    margin: "2rem 0",
    padding: "0.5rem 3rem",
    borderRadius: "10px",
  },
  buttonIcon: {
    height: "1.5rem",
    width: "1.5rem",
    marginRight: "0.6rem",
  },
  titleStyle: {},
  selected: {
    background: palette.background.primary.light,
    color: palette.text.secondary,
    "&:hover": {
      background: palette.background.primary.light,
    },
  },
  disabled: {
    opacity: "0.5",
  },
});
