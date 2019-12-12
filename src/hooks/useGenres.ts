import { useSelector } from 'react-redux';
import { filter, get } from 'lodash';

import { ApplicationState } from 'types/Store';

const useGenres = (genreIds: [number]) => {
  const genres = useSelector((state: ApplicationState) =>
    filter(get(state.genres.data, 'genres'), genre =>
      genreIds.includes(genre.id)
    )
  );

  return genres;
};

export default useGenres;
