import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import Avatar from '@material-ui/core/Avatar';

import { teamData } from '../teamData';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 20,
    marginLeft: 250
  },
  teamLogo: {
    borderRadius: 8,
    height: 100
  },
  colorContainer: {
    width: '80%',
    color: 'white'
  },
  color: {
    boxSizing: 'border-box',
    padding: 20,
    margin: '10px 10px 10px 0',
    borderRadius: 8
  }
}));

const TeamFrame = ({ selectedTeam }) => {
  console.log(selectedTeam);
  console.log(teamData);

  const classes = useStyles();
  const theme = useTheme();
  let team = null;

  if (selectedTeam) {
    team = teamData.filter((team) => team.id === selectedTeam)[0];
  }

  console.log('team', team);

  return team ? (
    <div className={classes.container}>
      <Grid container direction='column' spacing={2}>
        <Grid item container spacing={2} style={{ alignItems: 'center' }}>
          <Grid item>
            <img
              className={classes.teamLogo}
              alt={`${team.id} logo`}
              src={team.logo}
            />
          </Grid>
          <Grid item>
            <Typography variant='h3'>{team.name}</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.colorContainer}
          direction='column'
          justify='center'
        >
          <Grid
            item
            className={classes.color}
            style={{ backgroundColor: team.primaryColor }}
          >
            <Typography variant='h4'>
              Primary - {`${team.primaryColor}`}
            </Typography>
          </Grid>
          <Grid
            item
            className={classes.color}
            style={{ backgroundColor: team.secondaryColor }}
          >
            <Typography variant='h4'>
              Secondary - {`${team.secondaryColor}`}
            </Typography>
          </Grid>
          {team.accentColor ? (
            <Grid
              item
              className={classes.color}
              style={{ backgroundColor: team.accentColor }}
            >
              <Typography variant='h4'>
                Accent - {`${team.accentColor}`}
              </Typography>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </div>
  ) : null;
};

export default TeamFrame;
