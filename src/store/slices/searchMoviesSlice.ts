import { from } from 'rxjs';

import createRequestSlice from './utilities/createRequestSlice';

const genreResults = createRequestSlice({
  name: 'searchMovies',
  requestHandler: ({ action, dependencies: { movieApi } }: any) =>
    from(
      movieApi.get('search/movie', {
        params: { query: action.payload.searchQuery }
      })
    )
});

export default genreResults;
