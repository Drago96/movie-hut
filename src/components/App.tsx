import React from 'react';

import AppHeader from 'components/AppHeader/AppHeader';
import Router from 'components/Router';
import Sidebar from 'components/Sidebar/Sidebar';

import useStyles from './useStyles';
import LoadingOverlay from './UI/LoadingOverlay/LoadingOverlay';

const App: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <AppHeader />
      <Sidebar />
      <LoadingOverlay />
      <main className={styles.main}>
        <div className={styles.toolbar} />
        <Router />
      </main>
    </>
  );
};

export default App;
