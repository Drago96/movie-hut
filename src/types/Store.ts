import { Action } from 'redux';
import { Epic } from 'redux-observable';

import { LoadingOverlayState } from 'store/slices/loadingOverlaySlice';
import { ErrorSnackbarState } from 'store/slices/errorSnackbarSlice';
import { State as AuthenticationState } from 'store/reducers/authenticationReducer';
import ResponseState from './ResponseState';
import GenreList from './GenreList';
import MovieList from './MovieList';
import Services from './Services';
import MovieDetails from './MovieDetails';
import HomeData from './HomeData';
import WatchlistToggleResponse from './WatchlistToggleResponse';
import Watchlist from './Watchlist';

export type ApplicationEpic<
  TInputAction extends Action,
  TOutputAction extends TInputAction
> = Epic<TInputAction, TOutputAction, ApplicationState, Services>;

export type ApplicationState = {
  genreList: ResponseState<GenreList>;
  movieResults: ResponseState<MovieList>;
  loadingOverlay: LoadingOverlayState;
  movieDetails: MovieDetails;
  authenticationRequest: ResponseState<any>;
  authentication: AuthenticationState;
  homeData: HomeData;
  watchlistTogleRequest: WatchlistToggleResponse;
  watchlist: Pick<Watchlist, 'movies'>;
  errorSnackbar: ErrorSnackbarState;
};
