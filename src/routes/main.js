import React from "react";

import { Switch, Route } from "react-router-dom";

// Import Components
import Login from "../components/LoginForm";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
  </Switch>
);

export default Routes;
