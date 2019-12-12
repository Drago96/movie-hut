import React from 'react';
import { Star } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

import useStyles from './useStyles';

type Props = {
  voteAverage: number;
  voteCount: number;
};

const Vote: React.FC<Props> = ({ voteAverage, voteCount }) => {
  const classes = useStyles();

  return (
    <div className={classes.vote}>
      <Star className={classes.voteIcon} />
      <div className={classes.voteDetails}>
        <Typography className={classes.voteAverage}>
          {voteAverage}/10{' '}
        </Typography>
        <Typography color="textSecondary" className={classes.voteCount}>
          ({voteCount})
        </Typography>
      </div>
    </div>
  );
};

export default Vote;
