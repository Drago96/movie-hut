import { from, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import createRequestSlice from './utilities/createRequestSlice';

export enum Type {
  Register,
  Login
}

type RequestPayload = {
  email: string;
  password: string;
  name?: string;
  type: Type;
};

const ERROR_MAPPINGS: { [key: string]: string } = {
  'auth/user-not-found': 'Invalid login credentials',
  'auth/wrong-password': 'Invalid login credentials',
  'auth/invalid-data': 'Data is invalid',
  'auth/email-already-in-use': 'Email is already taken'
};

const authenticationRequestSlice = createRequestSlice<
  RequestPayload,
  firebase.auth.UserCredential
>({
  name: 'authenticationRequest',
  requestHandler: ({
    action: {
      payload: { email, password, name, type }
    },
    dependencies: { authenticationService }
  }) => {
    let authenticationRequest;

    if (type === Type.Register) {
      if (!name) {
        return throwError({ code: 'auth/invalid-data' });
      }

      authenticationRequest = authenticationService.register({
        email,
        password,
        name
      });
    } else {
      authenticationRequest = authenticationService.login({ email, password });
    }

    return from(authenticationRequest).pipe(
      map(response => ({
        data: response
      })),
      catchError(error => {
        return throwError({
          message: ERROR_MAPPINGS[error.code]
        });
      })
    );
  }
});

export default authenticationRequestSlice;
