import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Notifications from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

import { Link } from "react-router-dom";

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
      "linear-gradient(to right, rgba(0,142,158,1) 0%, rgba(0,142,158,1) 40%, #ff7161 100%)"
  },
  toolbar: {
    ...theme.mixins.toolbar,
    minHeight: 48
  },
  bigAvatar: {
    width: 150,
    height: 150
  },
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
    padding: theme.spacing.unit * 3,
    paddingTop: 110
  }
});

const ToolbarWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`;
const AvatarWrapper = styled.div`
  display: flex;
  margin: 50px;
  justify-content: center;
  align-items: center;
`;

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
          <Toolbar style={{ minHeight: 55}} className={classes.topBar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <ToolbarWrapper>
              <IconButton aria-haspopup="true" color="inherit">
                <Notifications />
              </IconButton>
            </ToolbarWrapper>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>{this.props.children}</main>
        <Drawer
          open={this.state.isOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={this.handleDrawerToggle}
        >
          <AvatarWrapper>
            <Avatar
              alt="Remy Sharp"
              src="https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1365/gallery-1520956952-chicken-tacos-horizontal.jpg?resize=980:*"
              className={classes.bigAvatar}
            />
          </AvatarWrapper>
          <MenuList>
            <MenuItem component={Link} to="/home" className={classes.menuItem}>
              <ListItemIcon className={classes.icon}>
                <SendIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="Accueil"
              />
            </MenuItem>
            <MenuItem
              component={Link}
              to="/dashboard"
              className={classes.menuItem}
            >
              <ListItemIcon className={classes.icon}>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="Dashboard"
              />
            </MenuItem>
            <MenuItem
              component={Link}
              to="/esperluette"
              className={classes.menuItem}
            >
              <ListItemIcon className={classes.icon}>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="Esperluette"
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
