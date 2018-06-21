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

import ProLogoDark from "./img/PrometricLogoDark.png";
import ProLogoLight from "./img/PrometricLogoLight.png";

class splashPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: { pageTitle: "" },
      lightTheme: this.props.classes.theme.palette.type === "light"
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
        <Grid item xl="3" lg="4" md="5" sm="6" xs="10" zeroMinWidth>
          <Paper className={this.props.classes.welcomePaper}>
            <Grid item xs="12">
              <img
                src={ProLogoLight}
                width="100%"
                hidden={!(this.props.classes.theme.palette.type === "light")}
              />

              <img
                src={ProLogoDark}
                width="104%"
                hidden={this.props.classes.theme.palette.type === "light"}
              />
            </Grid>
            <Divider />
            <br />
            <Grid item xs="12">
              <TextField
                className={this.props.classes.userTextBox}
                autoFocus
                fullwidth
                required
                label="Username"
                id="username"
              />
            </Grid>
            <Grid item xs="12">
              <TextField
                className={this.props.classes.userTextBox}
                required
                fullwidth
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
