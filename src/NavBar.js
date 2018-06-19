import React from "react";

import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import Light from "@material-ui/icons/BrightnessLow";
import Dark from "@material-ui/icons/BrightnessHigh";

const styles = {
  root: {
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
  }
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightButton: Light
    };
    this.lightButtonClick = this.lightButtonClick.bind(this);
  }
  render() {
    return (
      <AppBar className={this.props.classes.root}>
        <Toolbar>
          <IconButton
            className={this.props.classes.menuButton}
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={this.props.classes.flex} variant="title">
            {this.props.pageTitle}
          </Typography>
          <IconButton aria-label="Light/Dark">
            <this.state.lightButton onClick={this.lightButtonClick} />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
  lightButtonClick() {
    if (this.props.lighting === "light") this.setState({ lightButton: Dark });
    else this.setState({ lightButton: Light });
    this.props.LightUpdate();
  }
}
export default withStyles(styles)(NavBar);
