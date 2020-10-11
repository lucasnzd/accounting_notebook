import { createMuiTheme } from "@material-ui/core";
import { palette } from "./colors";
// TODO: Configure Material Theme to use our Color Palette

export const getTheme = (theme) =>
  createMuiTheme({
    palette: {
      type: theme.paletteType,
      primary: {
        main: "#fff",
      },
      nav: {
        backgroundColor: "#fff",
        backgroundImage: "#fff",
      },
      button: {
        primary: "#2B3FB2",
        color: "#fff",
        secondary: "#EE4539",
      },
      title: {
        main: theme.paletteType === "light" ? "#1d2639" : "#eee",
      },
      secondary: {
        main: "#d6dcff",
      },
      error: {
        main: "#FFD503",
      },
      background: {
        default: theme.paletteType === "light" ? "#fff" : "#1d2639",
      },
      card: {
        backgroundColor: theme.paletteType === "light" ? "#eee" : "#2b3957",
        backgroundImage:
          theme.paletteType === "light"
            ? "linear-gradient( 0deg, #fff, #fafafa)"
            : "linear-gradient( 0deg, #2b3957, #2b3957)",
      },
      typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: "'Open Sans', sans-serif",
      },
      overrides: {
        MUIDataTable: {
          root: {
            backgroundColor: "#FF0000",
          },
          MuiButton: {
            text: 'black',
            textPrimary: 'black'
          }
        },
      },
    },
  });
