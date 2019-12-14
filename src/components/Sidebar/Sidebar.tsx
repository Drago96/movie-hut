import React from 'react';
import { Drawer } from '@material-ui/core';

import useStyles from './useStyles';
import Genres from './Genres/Genres';

const Sidebar: React.FC = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      <Genres />
    </Drawer>
  );
};

export default Sidebar;
