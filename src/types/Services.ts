import movieApi from 'services/api/movieApi';
import firebaseApi from 'services/api/firebaseApi';
import * as authenticationService from 'services/authenticationService';

type Services = {
  movieApi: typeof movieApi;
  firebaseApi: typeof firebaseApi;
  authenticationService: typeof authenticationService;
};

export default Services;
