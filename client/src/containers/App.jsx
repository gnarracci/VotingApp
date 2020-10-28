import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import decode from "jwt-decode";

import { store } from "../store";
import { addError, setToken, setCurrentUserId } from "../store/actions";
import NavBar from "./NavBar";
import RouteViews from "./RouteViews";

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUserId(decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUserId({}));
    store.dispatch(addError(err));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <NavBar />
        <RouteViews />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
