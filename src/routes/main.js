import React from "react";

import { Switch, Route } from "react-router-dom";

// Import Components
import Login from "../components/LoginForm";
import Signup from "../components/SignupForm";
import InitialPage from "../pages/Initial";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/initial" component={InitialPage} />
  </Switch>
);

export default Routes;
