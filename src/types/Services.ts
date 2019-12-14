import movieApi from 'services/api/movieApi';
import firebaseApi from 'services/api/firebaseApi';
import * as authenticationService from 'services/authenticationService';
import * as watchlistService from 'services/watchlistService';

type Services = {
  movieApi: typeof movieApi;
  firebaseApi: typeof firebaseApi;
  authenticationService: typeof authenticationService;
  watchlistService: typeof watchlistService;
};

export default Services;
