import React from 'react';
import { CircularProgress, Dialog } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { ApplicationState } from 'types/Store';
import useStyles from './useStyles';

const LoadingOverlay: React.FC = () => {
  const classes = useStyles();

  const visible = useSelector(
    (state: ApplicationState) => state.loadingOverlay.visible
  );

  return (
    <Dialog
      open={visible}
      classes={{
        paper: classes.paper
      }}
    >
      <CircularProgress size={66} color="inherit" />
    </Dialog>
  );
};

export default LoadingOverlay;
