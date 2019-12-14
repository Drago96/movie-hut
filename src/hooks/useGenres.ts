import { useSelector } from 'react-redux';
import { filter, get, isEqual } from 'lodash';

import { ApplicationState } from 'types/Store';

const useGenres = (genreIds: number[]) => {
  const genres = useSelector(
    (state: ApplicationState) =>
      filter(get(state.genreList.data, 'genres'), genre =>
        genreIds.includes(genre.id)
      ),
    isEqual
  );

  return genres;
};

export default useGenres;
