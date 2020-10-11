import React, { PureComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core";
import { AppRoutes } from "./routes";
import { getTheme } from "./styles";
import "./App.scss";

const lightTheme = getTheme({
  paletteType: "light",
});

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      theme: lightTheme,
    };
  }

  render = () => {
    const { theme = {} } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <AppRoutes />
        </Router>
      </MuiThemeProvider>
    );
  };
}

export default connect()(App);
