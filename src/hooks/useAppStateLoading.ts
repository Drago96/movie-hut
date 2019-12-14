import { useSelector } from 'react-redux';

import { ApplicationState } from 'types/Store';

const useAppStateLoading = () => {
  const authInitialized = useSelector(
    (state: ApplicationState) => state.authentication.initialized
  );

  const appStateLoading = !authInitialized;

  return appStateLoading;
};

export default useAppStateLoading;
