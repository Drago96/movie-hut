import React from 'react';
import { useParams } from 'react-router';

import MovieResults from 'components/MovieResults/MovieResults';

const GenreResults: React.FC = () => {
  const { id } = useParams();

  return <MovieResults url="discover/movie" params={{ withGenres: id }} />;
};

export default GenreResults;
