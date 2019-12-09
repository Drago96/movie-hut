import { createEpicMiddleware } from 'redux-observable';
import { configureStore } from '@reduxjs/toolkit';

import movieApi from 'services/api/movieApi';
import epics from './epics/epics';
import reducers from './reducers/reducers';

const epicMiddleware = createEpicMiddleware({
  dependencies: { movieApi }
});

const store = configureStore({
  reducer: reducers,
  middleware: [epicMiddleware],
  devTools: process.env.NODE_ENV !== 'production'
});

epicMiddleware.run(epics);

export default store;
