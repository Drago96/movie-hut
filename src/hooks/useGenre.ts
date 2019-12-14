import { useSelector } from 'react-redux';
import { find, get, isEqual } from 'lodash';

import { ApplicationState } from 'types/Store';

const useGenre = (genreId: number) => {
  const genre = useSelector(
    (state: ApplicationState) =>
      find(
        get(state.genreList.data, 'genres'),
        genreToCheck => genreToCheck.id === genreId
      ),
    isEqual
  );

  return genre;
};

export default useGenre;
