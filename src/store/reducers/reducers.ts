import { combineReducers } from 'redux';

import movieListSlice from 'store/slices/movieListSlice';
import genresSlice from 'store/slices/genresSlice';
import loadingOverlaySlice from 'store/slices/loadingOverlaySlice';

export default combineReducers({
  movieList: movieListSlice.reducer,
  genres: genresSlice.reducer,
  loadingOverlay: loadingOverlaySlice.reducer
});
