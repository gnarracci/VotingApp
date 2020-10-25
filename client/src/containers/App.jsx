import React from "react";
import { Provider } from "react-redux";
import decode from "jwt-decode";

import { store } from "../store";
import { addError, setToken, setCurrentUserId } from "../store/actions";
import Auth from "../components/Auth";

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
    <Auth authType={"signin"} />
  </Provider>
);

export default App;
