import { combineEpics } from 'redux-observable';

import movieResultsSlice from 'store/slices/movieResultsSlice';
import genreListSlice from 'store/slices/genreListSlice';
import movieDetailsSlice from 'store/slices/movieDetailsSlice';
import authenticationRequestSlice from 'store/slices/authenticationRequestSlice';
import homeDataSlice from 'store/slices/homeDataSlice';
import authenticationEpics from './authenticationEpics';

export default combineEpics(
  movieResultsSlice.epic,
  genreListSlice.epic,
  movieDetailsSlice.epic,
  authenticationRequestSlice.epic,
  authenticationEpics,
  homeDataSlice.epic
);
