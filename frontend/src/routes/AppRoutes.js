import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";
import {
  UserDashboardScreen
} from "../views";

import "./styles.scss";

export class AppRoutes extends PureComponent {
  render() {
    return (
      <main className="main">
        <Switch>
          {/* *
           *
           * General Routes
           *
           * */}
          <Route component={UserDashboardScreen} path="/dashboard" />
          <Route component={UserDashboardScreen} path="*" />
        </Switch>
      </main>
    );
  }
}
