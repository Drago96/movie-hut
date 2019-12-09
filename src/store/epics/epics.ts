import { combineEpics, Epic } from 'redux-observable';
import { Action } from 'redux';

import { Services } from 'services/services';

import searchMoviesSlice from 'store/slices/searchMoviesSlice';
import genresSlice from 'store/slices/genresSlice';
import genreResultsSlice from 'store/slices/genreResultsSlice';

export type ApplicationEpic<
  TInputAction extends Action,
  TOutputAction extends TInputAction,
  ApplicationState
> = Epic<TInputAction, TOutputAction, ApplicationState, Services>;

export default combineEpics(
  searchMoviesSlice.epic,
  genresSlice.epic,
  genreResultsSlice.epic
);
