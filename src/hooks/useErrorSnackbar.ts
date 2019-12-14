import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import errorSnackbarSlice from 'store/slices/errorSnackbarSlice';

const useErrorSnackbar = (message: string | null | undefined) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      dispatch(errorSnackbarSlice.actions.showMessage({ message }));
    }

    return () => {
      dispatch(errorSnackbarSlice.actions.hide());
    };
  }, [dispatch, message]);
};

export default useErrorSnackbar;
