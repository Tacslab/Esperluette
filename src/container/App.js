import React, { Component, Fragment } from "react";
import { Route, withRouter } from "react-router-dom";
import Dashboard from "../container/Dashboard";
import Layout from "../container/Layout";
import "../globalStyles";
class App extends Component {
  render() {
    const { match: { path } } = this.props;

    return (
      <Fragment>
        <Layout>
          <Route path={path} component={Dashboard} />;
        </Layout>
      </Fragment>
    );
  }
}

export default withRouter(App);
