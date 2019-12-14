import { from } from 'rxjs';

import MovieList from 'types/MovieList';
import createRequestSlice from './utilities/createRequestSlice';

type MovieResultsRequestPayload = {
  url: string;
  params: {
    [key: string]: string;
  };
};

const movieResultsSlice = createRequestSlice<
  MovieResultsRequestPayload,
  MovieList
>({
  name: 'movieResults',
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

export default movieResultsSlice;
