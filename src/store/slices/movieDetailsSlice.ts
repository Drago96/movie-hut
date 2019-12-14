import { from, combineLatest, of, merge } from 'rxjs';
import { map, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

import MovieDetails from 'types/MovieDetails';
import Movie from 'types/Movie';
import Credits from 'types/Credits';
import MovieList from 'types/MovieList';
import createRequestSlice from './utilities/createRequestSlice';
import watchlistToggleRequestSlice from './watchlistToggleRequestSlice';

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
    state$,
    action$,
    dependencies: { movieApi, watchlistService }
  }) => {
    const watchlisted$ = state$.pipe(
      map(state => state.authentication.id),
      distinctUntilChanged(),
      switchMap(userId => {
        if (userId) {
          return merge(
            from(watchlistService.isWatchlisted(userId, id)),
            action$
              .ofType(watchlistToggleRequestSlice.actions.success.type)
              .pipe(
                filter(({ payload: { movieId } }: any) => movieId === id),
                map(({ payload: { watchlisted } }: any) => watchlisted)
              )
          );
        }

        return of(false);
      })
    );

    return combineLatest(
      from(movieApi.get<Movie>(`/movie/${id}`)),
      from(movieApi.get<Credits>(`/movie/${id}/credits`)),
      from(movieApi.get<MovieList>(`/movie/${id}/similar`)),
      watchlisted$
    ).pipe(
      map(([movieData, creditsData, similarMoviesData, watchlisted]) => {
        const movie = movieData.data;
        const credits = creditsData.data;
        const similarMovies = similarMoviesData.data;

        return {
          data: {
            movie,
            credits,
            similarMovies,
            watchlisted
          }
        } as AxiosResponse<MovieDetails>;
      })
    );
  }
});

export default movieDetailsSlice;
