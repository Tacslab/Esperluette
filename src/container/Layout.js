import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";

const drawerWidth = 275;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "calc(100vh)",
    zIndex: 1,
    overflow: "hidden",
    display: "flex",
    width: "100%"
  },
  drawerPaper: {
    width: drawerWidth
  },
  topBar: {
    background:
      "linear-gradient(to right, rgba(0,142,158,1) 0%, rgba(0,142,158,1) 20%, rgba(255,0,132,1) 100%)"
  },
  toolbar: theme.mixins.toolbar,
  menuItem: {
    "&:focus": {
      backgroundColor: "rgba(0,142,158,1)",
      "& $primary, & $icon": {
        color: theme.palette.common.white
      }
    }
  },
  primary: {},
  icon: {},
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

class ResponsiveDrawer extends React.Component {
  state = {
    isOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.topBar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography noWrap>
            {"You think water moves fast? You should see ice."}
          </Typography>
        </main>
        <Drawer
          open={this.state.isOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={this.handleDrawerToggle}
        >
          <MenuList>
            <MenuItem className={classes.menuItem}>
              <ListItemIcon className={classes.icon}>
                <SendIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="Sent mail"
              />
            </MenuItem>
            <MenuItem className={classes.menuItem}>
              <ListItemIcon className={classes.icon}>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="Drafts"
              />
            </MenuItem>
            <MenuItem className={classes.menuItem}>
              <ListItemIcon className={classes.icon}>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="Inbox"
              />
            </MenuItem>
          </MenuList>
        </Drawer>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
