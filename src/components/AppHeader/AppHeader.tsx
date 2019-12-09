import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

import Logo from './Logo';
import SearchForm from './SearchForm';

import useStyles from './useStyles';

const AppHeader: React.FC = () => {
  const styles = useStyles();

  return (
    <AppBar className={styles.appBar} position="fixed">
      <Toolbar>
        <Logo />
        <SearchForm />
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
