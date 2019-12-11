import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { SentimentVeryDissatisfied } from '@material-ui/icons';

import useStyles from './useStyles';

const NoResultsFound: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100%' }}
    >
      <Grid className={classes.message} item xs={3}>
        <SentimentVeryDissatisfied className={classes.emoji} />
        <Typography className={classes.content} color="inherit">
          No Results Found
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NoResultsFound;
