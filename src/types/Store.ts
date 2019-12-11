import { Action } from 'redux';
import { Epic } from 'redux-observable';

import { LoadingOverlayState } from 'store/slices/loadingOverlaySlice';
import RequestState from './RequestState';
import GenreList from './GenreList';
import MovieList from './MovieList';
import Services from './Services';

export type ApplicationEpic<
  TInputAction extends Action,
  TOutputAction extends TInputAction
> = Epic<TInputAction, TOutputAction, ApplicationState, Services>;

export type ApplicationState = {
  genres: RequestState<GenreList>;
  movieList: RequestState<MovieList>;
  loadingOverlay: LoadingOverlayState;
};
