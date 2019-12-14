import { AnyAction } from 'redux';
import { switchMap, map, filter } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { combineEpics } from 'redux-observable';

import {
  initAuthentication,
  clearAuthentication,
  setAuthentication,
  logout
} from 'store/actions/authenticationActions';
import { ApplicationEpic } from 'types/Store';
import authenticationRequestSlice from 'store/slices/authenticationRequestSlice';

const authenticationStateEpic: ApplicationEpic<AnyAction, AnyAction> = (
  action$,
  state$,
  { firebaseApi }
) =>
  action$.ofType(initAuthentication.type).pipe(
    switchMap(() => {
      const updateAuthenticationState = (user: firebase.User | null) => {
        if (!user) {
          return clearAuthentication();
        }

        return setAuthentication({
          id: user.uid,
          email: user.email as string,
          name: user.displayName as string
        });
      };

      const authentication$ = new Observable<firebase.User | null>(
        subscriber => {
          firebaseApi.auth().onAuthStateChanged(
            user => {
              if (!user) {
                return subscriber.next(null);
              }

              return subscriber.next(user);
            },
            error => subscriber.error(error),
            () => subscriber.complete()
          );
        }
      );

      return authentication$.pipe(
        filter(() => !state$.value.authenticationRequest.isLoading),
        map(user => updateAuthenticationState(user))
      );
    })
  );

const authenticationRequestSuccessEpic: ApplicationEpic<
  AnyAction,
  AnyAction
> = action$ =>
  action$.ofType(authenticationRequestSlice.actions.success.type).pipe(
    map(({ payload: { user } }: any) => {
      return setAuthentication({
        id: user.uid,
        email: user.email as string,
        name: user.displayName as string
      });
    })
  );

const logoutEpic: ApplicationEpic<AnyAction, AnyAction> = (
  action$,
  _,
  { firebaseApi }
) =>
  action$.ofType(logout.type).pipe(
    switchMap(() => {
      firebaseApi.auth().signOut();

      return empty();
    })
  );

export default combineEpics(
  authenticationStateEpic,
  authenticationRequestSuccessEpic,
  logoutEpic
);
