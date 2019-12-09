import React from 'react';

import AppHeader from 'components/AppHeader/AppHeader';
import Router from 'components/Router';
import Sidebar from 'components/Sidebar/Sidebar';

import useStyles from './useStyles';

const App: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <AppHeader />
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.toolbar} />
        <Router />
      </main>
    </>
  );
};

export default App;
