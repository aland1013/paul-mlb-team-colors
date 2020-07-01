import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import Collapse from '@material-ui/core/Collapse';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [alOpen, setAlOpen] = useState(false);
  const [nlOpen, setNlOpen] = useState(false);

  const handleDrawerClose = () => {
    setSidebarOpen(false);
  };

  const handleAlClick = () => {
    setAlOpen(!alOpen);
  };

  const handleNlClick = () => {
    setNlOpen(!nlOpen);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant='persistent'
      anchor='left'
      open={sidebarOpen}
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button onClick={handleAlClick}>
          <ListItemText primary='American League' />
          {alOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={alOpen} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary='AL West' />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary='AL Central' />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary='AL East' />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleNlClick}>
          <ListItemText primary='National League' />
          {nlOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={nlOpen} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary='NL West' />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary='NL Central' />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary='NL East' />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
