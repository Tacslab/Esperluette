import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "../components/Paper";

class Dashboard extends Component {
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={6}>
              <Paper title="toto" spacing={20}>
                toto
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper title="toto" spacing={20}>
                toto
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Dashboard;
