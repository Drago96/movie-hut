import React from 'react';

import useQueryParams from 'hooks/useQueryParams';
import searchMoviesSlice from 'store/slices/searchMoviesSlice';
import useRequestSlice from 'hooks/useRequestSlice';

const SearchResults: React.FC = () => {
  const { query } = useQueryParams();
  useRequestSlice(searchMoviesSlice, {
    searchQuery: query as string
  });

  return null;
};

export default SearchResults;
