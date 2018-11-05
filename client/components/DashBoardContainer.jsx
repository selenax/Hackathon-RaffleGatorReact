import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './Header';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '20px',
    margin: '20px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FormRow(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
        Contest: Win Google Home

        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
        Enter on Instagram
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>Deadline: December 20, 2018</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
        Contest: Vacation to anywhere in the world

        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
        Enter on facebook
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>Deadline: March 3, 2019</Paper>
      </Grid>
    </React.Fragment>
  );
}

FormRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

function DashBoardContainer(props) {
  const { classes } = props;

  return (
    <div>
      <Header />
      <div className={classes.root}>

        <Grid container spacing={8} style={{ padding: '20px' }}>
          <Grid container item xs={12} spacing={24}>
          <FormRow classes={classes} />
        </Grid>
          <Grid container item xs={12} spacing={24}>
          <FormRow classes={classes} />
        </Grid>
          <Grid container item xs={12} spacing={24}>
          <FormRow classes={classes} />
        </Grid>
        </Grid>
      </div>
    </div>
  );
}

DashBoardContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashBoardContainer);
