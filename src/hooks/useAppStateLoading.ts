import { useSelector } from 'react-redux';

import { ApplicationState } from 'types/Store';

const useAppStateLoading = () => {
  const genresLoading = useSelector(
    (state: ApplicationState) => state.genres.isLoading
  );

  const appStateLoading = genresLoading;

  return appStateLoading;
};

export default useAppStateLoading;
