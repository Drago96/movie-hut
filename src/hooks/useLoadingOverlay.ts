import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import loadingOverlaySlice from 'store/slices/loadingOverlaySlice';

const useLoadingOverlay = (displayOverlay: boolean) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (displayOverlay) {
      dispatch(loadingOverlaySlice.actions.show());
    }

    return () => {
      dispatch(loadingOverlaySlice.actions.hide());
    };
  }, [dispatch, displayOverlay]);
};

export default useLoadingOverlay;
