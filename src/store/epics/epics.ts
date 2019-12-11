import { combineEpics } from 'redux-observable';

import movieListSlice from 'store/slices/movieListSlice';
import genresSlice from 'store/slices/genresSlice';

export default combineEpics(movieListSlice.epic, genresSlice.epic);
