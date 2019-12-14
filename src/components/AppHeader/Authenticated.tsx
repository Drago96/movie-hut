import React, { useState, useRef } from 'react';
import { Button, Menu } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import useStyles from './useStyles';
import AuthenticatedActions from './AuthenticatedActions';

type Props = {
  name: string;
};

const Authenticated: React.FC<Props> = ({ name }) => {
  const classes = useStyles();

  const buttonRef = useRef<any>(null);
  const [anchorElement, setAnchorElement] = useState<any>(null);

  const handleClick = () => {
    setAnchorElement(buttonRef.current);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <>
      <Button
        ref={buttonRef}
        onClick={handleClick}
        disableFocusRipple
        color="inherit"
      >
        <AccountCircle className={classes.accountIcon} />
        {name}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={buttonRef.current}
        open={Boolean(anchorElement)}
        onClose={handleClose}
        classes={{
          paper: classes.menu
        }}
      >
        <AuthenticatedActions onAction={handleClose} />
      </Menu>
    </>
  );
};

export default Authenticated;
