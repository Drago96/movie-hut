import React from 'react';
import { Typography } from '@material-ui/core';
import { SentimentVeryDissatisfied } from '@material-ui/icons';

import useStyles from './useStyles';
import CenteredGrid from '../CenteredGrid/CenteredGrid';

const CenteredDissatisfiedMessage: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <CenteredGrid classes={{ gridItem: classes.message }}>
      <SentimentVeryDissatisfied className={classes.emoji} />
      <Typography className={classes.content} color="inherit">
        {children}
      </Typography>
    </CenteredGrid>
  );
};

export default CenteredDissatisfiedMessage;
