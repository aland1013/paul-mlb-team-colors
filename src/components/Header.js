import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: theme.palette.common.blue
  },
  menuButton: {
    color: theme.palette.common.red
  }
}));

const Header = ({ setSidebarOpen }) => {
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setSidebarOpen(true);
  };

  return (
    <AppBar position='static' className={classes.menu}>
      <Toolbar>
        <IconButton onClick={handleDrawerOpen} className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h5'>Paul's MLB Team Colors App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
