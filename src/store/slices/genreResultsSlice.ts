import { from } from 'rxjs';

import createRequestSlice from './utilities/createRequestSlice';

const genreResults = createRequestSlice({
  name: 'genreResults',
  requestHandler: ({ action, dependencies: { movieApi } }: any) =>
    from(
      movieApi.get('discover/movie', {
        params: { with_genres: action.payload.genre }
      })
    )
});

export default genreResults;
