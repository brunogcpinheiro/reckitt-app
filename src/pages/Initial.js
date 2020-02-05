import React from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";

const InitialPage = () => {
  const user = useSelector(state => state.auth.user);
  console.log(user);

  return <Header />;
};

export default InitialPage;
