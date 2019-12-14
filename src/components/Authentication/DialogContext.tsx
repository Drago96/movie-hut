import { createContext } from 'react';

const DialogContext = createContext({
  open: false,
  handleOpen: () => {},
  handleClose: () => {}
});

export default DialogContext;
