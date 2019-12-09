import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import SearchResults from './SearchResults/SearchResults';
import GenreResults from './GenreResults/GenreResults';

const Router: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/search">
      <SearchResults />
    </Route>
    <Route exact path="/genre/:genre">
      <GenreResults />
    </Route>
  </Switch>
);

export default Router;
