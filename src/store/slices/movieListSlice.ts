import { from } from 'rxjs';

import MovieList from 'types/MovieList';
import createRequestSlice from './utilities/createRequestSlice';

type MovieListRequestPayload = {
  url: string;
  params: {
    [key: string]: string;
  };
};

const movieListSlice = createRequestSlice<MovieListRequestPayload, MovieList>({
  name: 'movieList',
  requestHandler: ({
    action: {
      payload: { url, ...params }
    },
    dependencies: { movieApi }
  }) =>
    from(
      movieApi.get<MovieList>(url, { params })
    )
});

export default movieListSlice;
