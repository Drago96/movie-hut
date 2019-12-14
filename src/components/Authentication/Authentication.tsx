import React, { useState, useCallback } from 'react';
import { Button } from '@material-ui/core';

import DialogContext from './DialogContext';
import Dialog from './Dialog';
import useStyles from './useStyles';

const Authentication: React.FC = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), [setOpen]);
  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <>
      <Button
        disableFocusRipple
        onClick={handleOpen}
        color="inherit"
        variant="text"
        className={classes.toolbarButton}
      >
        Sign In
      </Button>
      <DialogContext.Provider value={{ open, handleOpen, handleClose }}>
        <Dialog />
      </DialogContext.Provider>
    </>
  );
};

export default Authentication;
