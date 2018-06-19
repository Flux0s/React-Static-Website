import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import LightGreen from "@material-ui/core/colors/lightGreen";
import BlueGray from "@material-ui/core/colors/blueGrey";
import Red from "@material-ui/core/colors/red";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import NavBar from "./NavBar.js";
import { Typography } from "@material-ui/core";

var Theme = createMuiTheme({
  palette: {
    primary: LightGreen,
    secondary: BlueGray,
    error: Red,
    type: "light"
  }
});

const styles = {
  root: {
    flexGrow: 1,
    background: Theme.palette.secondary.light,
    height: window.innerHeight
  },
  Splash: {
    flex: 1,
    height: "100%",
    background:
      "linear-gradient(80deg, " +
      Theme.palette.secondary.main +
      " 10%, " +
      Theme.palette.primary.main +
      " 90%)"
  },
  welcomePaper: {
    padding: Theme.spacing.unit * 2,
    textAlign: "center"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }
  render() {
    return (
      //     <img src={logo} className="App-logo" alt="logo" />
      <CssBaseline>
        <MuiThemeProvider theme={Theme}>
          <Page classes={this.props.classes} Login />
        </MuiThemeProvider>
      </CssBaseline>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: splashPage,
      info: { pageTitle: "Default Title" }
    };
    this.LoadPageInfo = this.LoadPageInfo.bind(this);
  }
  render() {
    return (
      <div className={this.props.classes.root}>
        <NavBar
          lighting={Theme.palette.type}
          LightUpdate={this.LightUpdate}
          pageTitle={this.state.info.pageTitle}
        />
        <this.state.body
          classes={this.props.classes}
          LoadPageInfo={this.LoadPageInfo}
        />
      </div>
    );
  }

  LoadPageInfo(infoIn) {
    this.setState({ info: infoIn });
  }

  LightUpdate() {
    if (Theme.palette.type === "light") Theme.palette.type = "dark";
    else Theme.palette.type = "light";
  }
}

class splashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: { pageTitle: Theme.palette.type } };
    this.props.LoadPageInfo(this.state.info);
  }
  render() {
    return (
      <Grid
        container
        className={this.props.classes.Splash}
        justify="center"
        alignItems="center"
      >
        <Grid item sm="3" xs="6">
          <Paper className={this.props.classes.welcomePaper}>
            <Typography variant="display2">Welcome!</Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(App);
