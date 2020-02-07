import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "../utils/PrivateRoute";

// Import Components
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import InitialPage from "../pages/Initial";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <PrivateRoute exact path="/initial" component={InitialPage} />
  </Switch>
);

export default Routes;
