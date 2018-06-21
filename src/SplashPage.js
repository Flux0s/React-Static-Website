import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { Typography, Divider, CardMedia, Card } from "@material-ui/core";

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
        <Grid item xl="3" lg="4" md="5" xs="7" zeroMinWidth>
          <Paper className={this.props.classes.welcomePaper}>
            <Card>
              <CardMedia
                image="./img/PrometricLogo.png"
                className={this.props.classes.proLogo}
              />
            </Card>
            <Divider />
            <Grid continer spacing="3">
              <TextField
                className={this.props.classes.userTextBox}
                width="300"
                autoFocus={true}
                required={true}
                label="Username"
                id="username"
              />
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
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
export default splashPage;
