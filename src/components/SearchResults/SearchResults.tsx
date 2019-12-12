import React from 'react';

import useQueryParams from 'hooks/useQueryParams';
import MovieResults from 'components/MovieResults/MovieResults';

const SearchResults: React.FC = () => {
  const {
    params: { query }
  } = useQueryParams();

  return (
    <MovieResults url="search/movie" params={{ query: query as string }} />
  );
};

export default SearchResults;
