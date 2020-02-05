import React from "react";

import { Switch, Route } from "react-router-dom";

// Import Components
import Login from "../components/LoginForm";
import InitialPage from "../pages/Initial";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/initial" component={InitialPage} />
  </Switch>
);

export default Routes;
