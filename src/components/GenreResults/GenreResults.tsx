import React from 'react';

import useQueryParams from 'hooks/useQueryParams';
import genreResultsSlice from 'store/slices/genreResultsSlice';
import useRequestSlice from 'hooks/useRequestSlice';

const SearchResults: React.FC = () => {
  const { genre } = useQueryParams();
  useRequestSlice(genreResultsSlice, {
    genre: genre as string
  });

  return null;
};

export default SearchResults;
