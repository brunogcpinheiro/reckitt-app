import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./styles/global";
import Routes from "./routes/main";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  );
};

export default App;
