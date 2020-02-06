import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import NotLogged from "../components/NotLogged";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authenticated = useSelector(state => state.auth.authenticated);

  return (
    <Route
      {...rest}
      render={props =>
        authenticated === false ? <NotLogged /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
