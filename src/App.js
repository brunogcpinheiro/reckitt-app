import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import GlobalStyle from "./styles/global";
import Routes from "./routes/main";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
