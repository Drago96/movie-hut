import { Action } from 'redux';
import { Epic } from 'redux-observable';

import { LoadingOverlayState } from 'store/slices/loadingOverlaySlice';
import { State as AuthenticationState } from 'store/reducers/authenticationReducer';
import ResponseState from './ResponseState';
import GenreList from './GenreList';
import MovieList from './MovieList';
import Services from './Services';
import MovieDetails from './MovieDetails';
import HomeData from './HomeData';

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
};
