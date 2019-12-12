import { from, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

import MovieListItem from 'types/MovieListItem';
import Credits from 'types/Credits';
import createRequestSlice from './utilities/createRequestSlice';

type MovieRequestPayload = {
  id: number;
};

type MovieResponsePayload = {
  movie: MovieListItem;
  credits: Credits;
};

const movieSlice = createRequestSlice<
  MovieRequestPayload,
  MovieResponsePayload
>({
  name: 'movie',
  requestHandler: ({
    action: {
      payload: { id }
    },
    dependencies: { movieApi }
  }) =>
    zip(
      from(movieApi.get<MovieListItem>(`movie/${id}`)),
      from(movieApi.get<Credits>(`movie/${id}/credits`))
    ).pipe(
      map(([movieData, creditsData]) => {
        const movie = movieData.data;
        const credits = creditsData.data;

        return {
          data: {
            movie,
            credits
          }
        } as AxiosResponse<MovieResponsePayload>;
      })
    )
});

export default movieSlice;
