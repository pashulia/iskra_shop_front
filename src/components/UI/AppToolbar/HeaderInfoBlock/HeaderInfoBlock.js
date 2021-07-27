import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const HeaderInfoBlock = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>Главная</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Каталог</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Контакты</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default HeaderInfoBlock;