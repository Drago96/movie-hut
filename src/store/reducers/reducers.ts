import { combineReducers } from 'redux';

import movieResultsSlice from 'store/slices/movieResultsSlice';
import genreListSlice from 'store/slices/genreListSlice';
import loadingOverlaySlice from 'store/slices/loadingOverlaySlice';
import movieDetailsSlice from 'store/slices/movieDetailsSlice';
import authenticationRequestSlice from 'store/slices/authenticationRequestSlice';
import homeDataSlice from 'store/slices/homeDataSlice';
import authenticationReducer from './authenticationReducer';

export default combineReducers({
  movieResults: movieResultsSlice.reducer,
  genreList: genreListSlice.reducer,
  loadingOverlay: loadingOverlaySlice.reducer,
  movieDetails: movieDetailsSlice.reducer,
  authenticationRequest: authenticationRequestSlice.reducer,
  authentication: authenticationReducer,
  homeData: homeDataSlice.reducer
});
