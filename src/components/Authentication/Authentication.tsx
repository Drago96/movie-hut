import React, { useState, useCallback } from 'react';
import { Button } from '@material-ui/core';

import DialogContext from './DialogContext';
import Dialog from './Dialog';

const Authentication: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), [setOpen]);
  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <>
      <Button disableFocusRipple onClick={handleOpen} color="inherit">
        Sign In
      </Button>
      <DialogContext.Provider value={{ open, handleOpen, handleClose }}>
        <Dialog />
      </DialogContext.Provider>
    </>
  );
};

export default Authentication;
