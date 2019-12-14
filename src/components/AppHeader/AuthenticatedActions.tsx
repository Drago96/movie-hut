import React, { forwardRef } from 'react';
import { MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { logout } from 'store/actions/authenticationActions';

type Props = {
  onAction: () => void;
};

const AuthenticatedActions = forwardRef<HTMLLIElement, Props>(
  ({ onAction }, ref) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleLogout = () => {
      onAction();

      dispatch(logout());
    };

    const handleWatchlist = () => {
      onAction();

      history.push('/watchlist');
    };

    return (
      <>
        <MenuItem ref={ref} onClick={handleWatchlist}>
          Watchlist
        </MenuItem>
        <MenuItem ref={ref} onClick={handleLogout}>
          Logout
        </MenuItem>
      </>
    );
  }
);

export default AuthenticatedActions;
