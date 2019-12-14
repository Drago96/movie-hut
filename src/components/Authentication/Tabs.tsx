import React, { useState } from 'react';
import { Tab, Tabs as MaterialTabs } from '@material-ui/core';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import useStyles from './useStyles';
import AuthenticationForm from './AuthenticationForm';

const Tabs: React.FC = () => {
  const classes = useStyles();

  const [tab, setTab] = useState(0);
  const handleTabChange = (_: any, newTab: number) => setTab(newTab);

  return (
    <>
      <MaterialTabs
        classes={{
          indicator: classes.indicator
        }}
        value={tab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="inherit"
      >
        <Tab className={classes.tab} label="Login" />
        <Tab className={classes.tab} label="Register" />
      </MaterialTabs>
      <div className={classes.tabContent}>
        {tab === 0 && <AuthenticationForm component={LoginForm} />}
        {tab === 1 && <AuthenticationForm component={RegisterForm} />}
      </div>
    </>
  );
};

export default Tabs;
