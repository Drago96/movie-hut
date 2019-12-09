import { combineReducers } from 'redux';

import searchMoviesSlice from 'store/slices/searchMoviesSlice';
import genresSlice from 'store/slices/genresSlice';
import genreResultsSlice from 'store/slices/genreResultsSlice';

export default combineReducers({
  searchMovies: searchMoviesSlice.reducer,
  genres: genresSlice.reducer,
  genreResults: genreResultsSlice.reducer
});
