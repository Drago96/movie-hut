import React from 'react';
import { useParams } from 'react-router';

import Movies from 'components/Movies/Movies';

const GenreResults: React.FC = () => {
  const { genre } = useParams();

  return <Movies url="discover/movie" params={{ with_genres: genre }} />;
};

export default GenreResults;
