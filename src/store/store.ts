import { createEpicMiddleware, EpicMiddleware } from 'redux-observable';
import { configureStore, AnyAction } from '@reduxjs/toolkit';

import Services from 'types/Services';
import movieApi from 'services/api/movieApi';
import firebaseApi from 'services/api/firebaseApi';
import * as authenticationService from 'services/authenticationService';
import * as watchlistService from 'services/watchlistService';
import { ApplicationState } from 'types/Store';
import epics from './epics/epics';
import reducers from './reducers/reducers';

const epicMiddleware: EpicMiddleware<
  AnyAction,
  AnyAction,
  ApplicationState,
  Services
> = createEpicMiddleware({
  dependencies: {
    movieApi,
    firebaseApi,
    authenticationService,
    watchlistService
  }
});

const store = configureStore({
  reducer: reducers,
  middleware: [epicMiddleware],
  devTools: process.env.NODE_ENV !== 'production'
});

epicMiddleware.run(epics);

export default store;
