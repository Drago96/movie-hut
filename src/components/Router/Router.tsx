import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import SearchResults from '../SearchResults/SearchResults';
import GenreResults from '../GenreResults/GenreResults';
import MovieDetails from '../MovieDetails/MovieDetails';
import NotFound from '../UI/NotFound/NotFound';
import Watchlist from '../Watchlist/Watchlist';
import AuthenticatedRoute from './AuthenticatedRoute';

const Router: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/search">
      <SearchResults />
    </Route>
    <Route exact path="/genre/:id">
      <GenreResults />
    </Route>
    <Route exact path="/movie/:id">
      <MovieDetails />
    </Route>
    <AuthenticatedRoute exact path="/watchlist">
      <Watchlist />
    </AuthenticatedRoute>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default Router;
