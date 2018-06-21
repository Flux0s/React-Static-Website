import React, { Component } from "react";

import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import Light from "@material-ui/icons/BrightnessLow";
import Dark from "@material-ui/icons/BrightnessHigh";
import { ListItemText } from "@material-ui/core";

const styles = {
  nav: {
    position: "fixed",
    flexGrow: 1,
    spacing: 10
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    color: "inherit",
    width: 250
  }
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Drawer_Left: false,
      themeButton: Light
    };
  }

  render() {
    const sideList = (
      <div className={this.props.classes.list}>
        <Typography variant="display1">Settings</Typography>
        <Divider />
        <ListItem
          onClick={this.ThemeButtonClick}
          button
          aria-label="Light/Dark"
        >
          <this.state.themeButton color="inherit" />
          <ListItemText>Toggle Night Mode</ListItemText>
        </ListItem>
        <Typography className={this.props.classes.flex} variant="subheading" />
      </div>
    );

    return (
      <div>
        <AppBar className={this.props.classes.nav}>
          <Toolbar>
            <IconButton
              className={this.props.classes.menuButton}
              onClick={this.toggleDrawer(true)}
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={this.props.classes.flex} variant="title">
              {this.props.pageTitle}
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          open={this.state.Drawer_Left}
          onClose={this.toggleDrawer(false)}
        >
          <div tabIndex={0} role="button" onKeyDown={this.toggleDrawer(false)}>
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }

  ThemeButtonClick = () => {
    this.props.LightUpdate() === "light"
      ? this.setState({ themeButton: Light })
      : this.setState({ themeButton: Dark });
  };

  toggleDrawer = (open) => () => {
    this.setState({
      Drawer_Left: open
    });
  };
}
export default withStyles(styles)(NavBar);
