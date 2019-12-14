import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  Divider
} from '@material-ui/core';

type Props = {
  message: string;
  open: boolean;
  onOkClick: () => void;
  onCancelClick: () => void;
};

const ConfirmationDialog: React.FC<Props> = ({
  message,
  open,
  onOkClick,
  onCancelClick
}) => {
  return (
    <Dialog maxWidth="xs" onClose={onCancelClick} open={open}>
      <DialogTitle>{message}</DialogTitle>
      <Divider />
      <DialogActions>
        <Button autoFocus onClick={onCancelClick}>
          Cancel
        </Button>
        <Button onClick={onOkClick}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
