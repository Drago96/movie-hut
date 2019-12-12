import React from 'react';

import Router from 'components/Router';
import useStyles from './useStyles';

const Main = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <div className={classes.toolbar} />
      <Router />
    </main>
  );
};

export default Main;
