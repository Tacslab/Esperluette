import React, { Component, Fragment } from "react";
import { Route, withRouter } from "react-router-dom";
import Dashboard from "../container/Dashboard";
import Home from "../container/Home";
import Layout from "../container/Layout";
import "../globalStyles";

class App extends Component {
  render() {
    const { match: { path } } = this.props;

    return (
      <Fragment>
        <Layout>
          <Route exact path="/home" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Layout>
      </Fragment>
    );
  }
}

export default withRouter(App);
