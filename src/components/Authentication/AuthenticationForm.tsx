import React, { useContext, useEffect } from 'react';
import { Typography } from '@material-ui/core';

import useRequestSlice from 'hooks/useRequestSlice';
import authenticationRequestSlice, {
  Type as AuthenticationType
} from 'store/slices/authenticationRequestSlice';
import DialogContext from './DialogContext';
import useStyles from './useStyles';

type OnSubmitHandler = (params: {
  email: string;
  password: string;
  name?: string;
  authenticationType: AuthenticationType;
}) => void;

export type AuthenticationFormProps = {
  onSubmit: OnSubmitHandler;
  submitting: boolean;
};

type Props = {
  component: React.FC<AuthenticationFormProps>;
};

const AuthenticationForm: React.FC<Props> = ({ component }) => {
  const classes = useStyles();

  const [
    initiateRequest,
    { success, isLoading, error }
  ] = useRequestSlice(authenticationRequestSlice, { hideErrorSnackbar: true });

  const { handleClose } = useContext(DialogContext);

  useEffect(() => {
    if (success) {
      handleClose();
    }
  }, [success, handleClose]);

  const Component = component;

  return (
    <>
      <Typography className={classes.error}>{error}</Typography>
      <Component onSubmit={initiateRequest} submitting={isLoading} />
    </>
  );
};

export default AuthenticationForm;
