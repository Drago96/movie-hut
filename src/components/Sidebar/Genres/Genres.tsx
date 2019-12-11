import React from 'react';
import { get } from 'lodash';

import genresSlice from 'store/slices/genresSlice';
import useRequestSlice from 'hooks/useRequestSlice';
import GenreList from './GenreList';

const Genres: React.FC = () => {
  const { data } = useRequestSlice(genresSlice);

  return <GenreList genres={get(data, 'genres')} />;
};

export default Genres;
