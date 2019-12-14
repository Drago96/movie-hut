import React, { forwardRef } from 'react';
import { MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { logout } from 'store/actions/authenticationActions';

type Props = {
  onAction: () => void;
};

const AuthenticatedActions: React.FC<Props> = forwardRef<HTMLLIElement, Props>(
  ({ onAction }, ref) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
      onAction();

      dispatch(logout());
    };

    return (
      <MenuItem ref={ref} onClick={handleLogout}>
        Logout
      </MenuItem>
    );
  }
);

export default AuthenticatedActions;
