import React from 'react';
import { get } from 'lodash';

import genresSlice from 'store/slices/genresSlice';
import useRequestSlice from 'hooks/useRequestSlice';
import GenresList from './GenresList';

const Genres: React.FC = () => {
  const { data } = useRequestSlice(genresSlice);

  return <GenresList genres={get(data, 'genres')} />;
};

export default Genres;
