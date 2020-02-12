import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../Header";
import InitialPage from "../../pages/Initial";

import * as S from "./styles";

const Layout = () => {
  return (
    <>
      <Header />
      <S.MainWrapper>
        <Switch>
          <Route path="/app/initial" component={InitialPage} />
        </Switch>
      </S.MainWrapper>
    </>
  );
};

export default Layout;
