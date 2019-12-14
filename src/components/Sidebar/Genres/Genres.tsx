import React from 'react';
import { get } from 'lodash';

import genreListSlice from 'store/slices/genreListSlice';
import useInitiateRequestSlice from 'hooks/useInitiateRequestSlice';
import GenreList from './GenreList';

const Genres: React.FC = () => {
  const { data } = useInitiateRequestSlice(genreListSlice);

  return <GenreList genres={get(data, 'genres')} />;
};

export default Genres;
