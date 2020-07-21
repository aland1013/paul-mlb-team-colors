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
    width: drawerWidth,
    backgroundColor: theme.palette.common.blue,
    color: 'white'
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
  },
  iconButton: {
    color: 'white'
  }
}));

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  selectedTeam,
  setSelectedTeam
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [alOpen, setAlOpen] = useState(false);
  const [alwOpen, setAlwOpen] = useState(false);
  const [alcOpen, setAlcOpen] = useState(false);
  const [aleOpen, setAleOpen] = useState(false);
  const [nlOpen, setNlOpen] = useState(false);
  const [nlwOpen, setNlwOpen] = useState(false);
  const [nlcOpen, setNlcOpen] = useState(false);
  const [nleOpen, setNleOpen] = useState(false);

  const handleDrawerClose = () => {
    setSidebarOpen(false);
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
        <IconButton onClick={handleDrawerClose} className={classes.iconButton}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button onClick={() => setAlOpen(!alOpen)}>
          <ListItemText
            style={{ color: alOpen ? theme.palette.common.red : 'white' }}
            primary='American League'
          />
          {alOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={alOpen} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem
              button
              onClick={() => setAlwOpen(!alwOpen)}
              className={classes.nested}
            >
              <ListItemText
                style={{ color: alwOpen ? theme.palette.common.red : 'white' }}
                primary='AL West'
              />
              {alwOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={alwOpen} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('HOU')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'HOU'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Houston Astros' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('LAA')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'LAA'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Los Angeles Angels' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('OAK')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'OAK'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Oakland Athletics' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('SEA')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'SEA'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Seattle Mariners' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('TEX')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'TEX'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Texas Rangers' />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              onClick={() => setAlcOpen(!alcOpen)}
              className={classes.nested}
            >
              <ListItemText
                style={{ color: alcOpen ? theme.palette.common.red : 'white' }}
                primary='AL Central'
              />
              {alcOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={alcOpen} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('CWS')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'CWS'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Chicago White Sox' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('CLE')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'CLE'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Cleveland Indians' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('DET')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'DET'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Detroit Tigers' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('KC')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'KC' ? theme.palette.common.red : 'white'
                  }}
                >
                  <ListItemText primary='Kansas City Royals' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('MIN')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'MIN'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Minnesota Twins' />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              onClick={() => setAleOpen(!aleOpen)}
              className={classes.nested}
            >
              <ListItemText
                style={{ color: aleOpen ? theme.palette.common.red : 'white' }}
                primary='AL East'
              />
              {aleOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={aleOpen} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('BAL')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'BAL'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Baltimore Orioles' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('BOS')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'BOS'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Boston Red Sox' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('NYY')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'NYY'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='New York Yankees' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('TB')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'TB' ? theme.palette.common.red : 'white'
                  }}
                >
                  <ListItemText primary='Tampa Bay Rays' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('TOR')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'TOR'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Toronto Blue Jays' />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Collapse>
        <ListItem button onClick={() => setNlOpen(!nlOpen)}>
          <ListItemText
            style={{ color: nlOpen ? theme.palette.common.red : 'white' }}
            primary='National League'
          />
          {nlOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={nlOpen} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem
              button
              onClick={() => setNlwOpen(!nlwOpen)}
              className={classes.nested}
            >
              <ListItemText
                style={{ color: nlwOpen ? theme.palette.common.red : 'white' }}
                primary='NL West'
              />
              {nlwOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={nlwOpen} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('ARI')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'ARI'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Arizona Diamondbacks' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('COL')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'COL'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Colorado Rockies' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('LAD')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'LAD'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Los Angeles Dodgers' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('SD')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'SD' ? theme.palette.common.red : 'white'
                  }}
                >
                  <ListItemText primary='San Diego Padres' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('SF')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'SF' ? theme.palette.common.red : 'white'
                  }}
                >
                  <ListItemText primary='San Francisco Giants' />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              onClick={() => setNlcOpen(!nlcOpen)}
              className={classes.nested}
            >
              <ListItemText
                style={{ color: nlcOpen ? theme.palette.common.red : 'white' }}
                primary='NL Central'
              />
              {nlcOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={nlcOpen} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('CHC')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'CHC'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Chicago Cubs' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('CIN')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'CIN'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Cincinnati Reds' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('MIL')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'MIL'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Milwaukee Brewers' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('PIT')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'PIT'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Pittsburgh Pirates' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('STL')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'STL'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='St. Louis Cardinals' />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              onClick={() => setNleOpen(!nleOpen)}
              className={classes.nested}
            >
              <ListItemText
                style={{ color: nleOpen ? theme.palette.common.red : 'white' }}
                primary='NL East'
              />
              {nleOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={nleOpen} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('ATL')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'ATL'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Atlanta Braves' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('MIA')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'MIA'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Miami Marlins' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('NYM')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'NYM'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='New York Mets' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('PHI')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'PHI'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Philadelphia Phillies' />
                </ListItem>
                <ListItem
                  button
                  onClick={() => setSelectedTeam('WAS')}
                  className={classes.nested}
                  style={{
                    color:
                      selectedTeam === 'WAS'
                        ? theme.palette.common.red
                        : 'white'
                  }}
                >
                  <ListItemText primary='Washington Nationals' />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
