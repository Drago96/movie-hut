import { from } from 'rxjs';

import Movie from 'types/Movie';
import WatchlistToggleResponse from 'types/WatchlistToggleResponse';
import createRequestSlice from './utilities/createRequestSlice';

type AddToWatchlistRequestPayload = {
  movie: Movie;
  watchlisted: true;
};

type RemoveFromWatchlistRequestPayload = {
  movieId: number;
  watchlisted: false;
};

type WatchlistToggleRequestPayload =
  | AddToWatchlistRequestPayload
  | RemoveFromWatchlistRequestPayload;

const watchlistToggleRequestSlice = createRequestSlice<
  WatchlistToggleRequestPayload,
  WatchlistToggleResponse
>({
  name: 'watchlistToggleRequest',
  requestHandler: ({
    action: { payload },
    state$,
    dependencies: { watchlistService }
  }) => {
    const userId = state$.value.authentication.id as string;
    const { watchlisted } = payload;

    let watchlistRequest;
    let movieId: number;

    if (watchlisted) {
      const { movie } = payload as AddToWatchlistRequestPayload;

      watchlistRequest = watchlistService.add(userId, movie);

      movieId = movie.id;
    } else {
      const {
        movieId: payloadMovieId
      } = payload as RemoveFromWatchlistRequestPayload;

      watchlistRequest = watchlistService.remove(userId, payloadMovieId);

      movieId = payloadMovieId;
    }

    return from(
      watchlistRequest.then(() => ({ data: { movieId, watchlisted } }))
    );
  }
});

export default watchlistToggleRequestSlice;
