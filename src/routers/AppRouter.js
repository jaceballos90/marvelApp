import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
