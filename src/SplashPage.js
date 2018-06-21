import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import {
  Typography,
  Divider,
  CardMedia,
  Card,
  Button
} from "@material-ui/core";

import ProLogo from "./img/PrometricLogo.png";

class splashPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: { pageTitle: "" }
    };
    this.props.LoadPageInfo(this.state.info);
  }
  render() {
    return (
      <Grid
        className={this.props.classes.splash}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item xl="3" lg="4" md="5" sm="6" xs="7" zeroMinWidth>
          <Paper className={this.props.classes.welcomePaper}>
            <Grid item xs="12" background="radial-gradient(black, white)">
              <img src={ProLogo} width="100%" />
            </Grid>
            <Divider />
            <br />
            <Grid item xs="12">
              <TextField
                className={this.props.classes.userTextBox}
                width="300"
                autoFocus={true}
                required={true}
                label="Username"
                id="username"
              />
            </Grid>
            <Grid item xs="12">
              <TextField
                className={this.props.classes.userTextBox}
                width="300"
                autoFocus={false}
                required={true}
                label="Password"
                id="password"
                type="password"
              />
            </Grid>
            <br />
            <Grid container justify="flex-end">
              <Button
                variant="contained"
                color="primary"
                className={this.props.classes.button}
              >
                Submit
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
export default splashPage;
