import React from 'react';
import { Drawer } from '@material-ui/core';

import useStyles from './useStyles';
import Genres from './Genres/Genres';

const Sidebar: React.FC = () => {
  const styles = useStyles();

  return (
    <Drawer
      className={styles.drawer}
      variant="permanent"
      classes={{
        paper: styles.drawerPaper
      }}
    >
      <div className={styles.toolbar} />
      <Genres />
    </Drawer>
  );
};

export default Sidebar;
