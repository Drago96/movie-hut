import React, { useContext } from 'react';
import { Dialog as MaterialDialog, DialogContent } from '@material-ui/core';

import DialogContext from './DialogContext';
import useStyles from './useStyles';
import Tabs from './Tabs';

const Dialog: React.FC = () => {
  const classes = useStyles();

  const { open, handleClose } = useContext(DialogContext);

  return (
    <MaterialDialog open={open} onClose={handleClose}>
      <DialogContent className={classes.dialogContent}>
        <Tabs />
      </DialogContent>
    </MaterialDialog>
  );
};

export default Dialog;
