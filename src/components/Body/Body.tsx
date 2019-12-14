import React from 'react';

import Router from 'components/Router/Router';
import AppHeader from 'components/AppHeader/AppHeader';
import Sidebar from 'components/Sidebar/Sidebar';
import LoadingOverlay from 'components/UI/LoadingOverlay/LoadingOverlay';
import ErrorSnackbar from 'components/UI/ErrorSnackbar/ErrorSnackbar';
import useStyles from './useStyles';

const Body = () => {
  const classes = useStyles();

  return (
    <>
      <AppHeader />
      <Sidebar />
      <LoadingOverlay />
      <ErrorSnackbar />
      <main className={classes.main}>
        <div className={classes.toolbar} />
        <Router />
      </main>
    </>
  );
};

export default Body;
