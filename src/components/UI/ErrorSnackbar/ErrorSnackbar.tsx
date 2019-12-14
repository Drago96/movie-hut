import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState } from 'types/Store';
import errorSnackbarSlice from 'store/slices/errorSnackbarSlice';

const ErrorSnackbar: React.FC = () => {
  const dispatch = useDispatch();
  const message = useSelector(
    (state: ApplicationState) => state.errorSnackbar.message
  );

  const open = message !== null;

  const handleClose = () => dispatch(errorSnackbarSlice.actions.hide());

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={message}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  );
};

export default ErrorSnackbar;
