import React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";

import AuthPage from "../pages/AuthPage";

const RouteViews = ({ auth }) => (
  <main>
    <Switch>
      <Route
        exac
        path="/signin"
        render={() => (
          <AuthPage authType="signin" isAuthenticated={auth.isAuthenticated} />
        )}
      />
      <Route
        exac
        path="/signup"
        render={() => (
          <AuthPage authType="signup" isAuthenticated={auth.isAuthenticated} />
        )}
      />
    </Switch>
  </main>
);

export default withRouter(
  connect((store) => ({ auth: store.auth }))(RouteViews)
);
