import { from, merge, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import Watchlist from 'types/Watchlist';
import createRequestSlice from './utilities/createRequestSlice';
import watchlistToggleRequestSlice from './watchlistToggleRequestSlice';

const watchlistSlice = createRequestSlice<{}, Pick<Watchlist, 'movies'>>({
  name: 'watchlist',
  requestHandler: ({ dependencies: { watchlistService }, state$, action$ }) => {
    const userId = state$.value.authentication.id as string;

    return merge(
      of(null),
      action$.ofType(watchlistToggleRequestSlice.actions.success.type)
    ).pipe(
      switchMap(() => {
        return from(watchlistService.get(userId)).pipe(
          map(watchlist => ({
            data: {
              movies: watchlist.movies
            }
          }))
        );
      })
    );
  }
});

export default watchlistSlice;
