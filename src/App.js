import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import LightGreen from "@material-ui/core/colors/lightGreen";
import BlueGray from "@material-ui/core/colors/blueGrey";
import Red from "@material-ui/core/colors/red";

import NavBar from "./NavBar.js";
import SplashPage from "./SplashPage.js";

const Theme = {
  palette: {
    primary: LightGreen,
    secondary: BlueGray,
    error: Red
  }
};

const styles = (theme) => ({
  splash: {
    height: "100%",
    background:
      "linear-gradient(315deg, " +
      theme.palette.secondary.main +
      " 5%, " +
      theme.palette.primary.dark +
      " 100%) "
  },
  welcomePaper: {
    textAlign: "center",
    padding: theme.spacing.unit * 4
  },
  userTextBox: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginup: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      theme: createMuiTheme(Theme)
    };
  }
  render() {
    return (
      //<img src={logo} className="App-logo" alt="logo" />
      <CssBaseline>
        <MuiThemeProvider theme={this.state.theme}>
          <Page classes={this.props.classes} LightUpdate={this.LightUpdate} />
        </MuiThemeProvider>
      </CssBaseline>
    );
  }

  LightUpdate = () => {
    var type = this.state.theme.palette.type;
    if (type === "light") type = "dark";
    else type = "light";

    var _theme = {
      ...Theme,
      palette: {
        ...Theme.palette,
        type: type
      }
    };

    this.setState({ theme: createMuiTheme(_theme) });
    return type;
  };
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: SplashPage,
      info: { pageTitle: "Default Title" }
    };
  }
  render() {
    return (
      <div
        style={{
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          position: "absolute"
        }}
      >
        <NavBar
          LightUpdate={this.props.LightUpdate}
          pageTitle={this.state.info.pageTitle}
        />
        <this.state.body
          height={this.state.height}
          classes={this.props.classes}
          LoadPageInfo={this.LoadPageInfo}
        />
      </div>
    );
  }
  LoadPageInfo = (infoIn) => {
    this.setState({ info: infoIn });
  };
}
export default withStyles(styles(createMuiTheme(Theme)))(App);
