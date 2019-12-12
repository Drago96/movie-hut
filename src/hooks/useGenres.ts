import { useSelector } from 'react-redux';
import { filter, get } from 'lodash';

import Genre from 'types/Genre';
import { ApplicationState } from 'types/Store';

const useGenres = (genreIds: [number]) => {
  const genres = useSelector((state: ApplicationState) =>
    filter(get(state.genres.data, 'genres'), genre =>
      genreIds.includes(genre.id)
    )
  );

  return genres as [Genre];
};

export default useGenres;
