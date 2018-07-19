import React, { Component, Fragment } from "react";
import { Route, withRouter } from "react-router-dom";
import Dashboard from "../container/Dashboard";

class App extends Component {
  render() {
    const { match: { path } } = this.props;

    return (
      <Fragment>
        <Route path={path} component={Dashboard} />;
      </Fragment>
    );
  }
}

export default withRouter(App);
