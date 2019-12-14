import { from, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

import MovieDetails from 'types/MovieDetails';
import Movie from 'types/Movie';
import Credits from 'types/Credits';
import MovieList from 'types/MovieList';
import createRequestSlice from './utilities/createRequestSlice';

type MovieDetailsRequestPayload = {
  id: number;
};

const movieDetailsSlice = createRequestSlice<
  MovieDetailsRequestPayload,
  MovieDetails
>({
  name: 'movieDetails',
  requestHandler: ({
    action: {
      payload: { id }
    },
    dependencies: { movieApi }
  }) =>
    zip(
      from(movieApi.get<Movie>(`/movie/${id}`)),
      from(movieApi.get<Credits>(`/movie/${id}/credits`)),
      from(movieApi.get<MovieList>(`/movie/${id}/similar`))
    ).pipe(
      map(([movieData, creditsData, similarMoviesData]) => {
        const movie = movieData.data;
        const credits = creditsData.data;
        const similarMovies = similarMoviesData.data;

        return {
          data: {
            movie,
            credits,
            similarMovies
          }
        } as AxiosResponse<MovieDetails>;
      })
    )
});

export default movieDetailsSlice;
