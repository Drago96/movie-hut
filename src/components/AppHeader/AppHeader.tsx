import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

import Logo from './Logo';
import SearchForm from './SearchForm';
import useStyles from './useStyles';
import Actions from './Actions';

const AppHeader: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <Logo />
        <SearchForm />
        <div className={classes.grow} />
        <Actions />
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
