import React from 'react';

import useQueryParams from 'hooks/useQueryParams';
import Movies from 'components/Movies/Movies';

const SearchResults: React.FC = () => {
  const {
    params: { query }
  } = useQueryParams();

  return (
    <Movies url="search/movie" params={{ query: query as string }} />
  );
};

export default SearchResults;
