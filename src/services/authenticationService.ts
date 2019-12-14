import firebaseApi from './api/firebaseApi';

type LoginParams = {
  email: string;
  password: string;
};

type RegisterParams = LoginParams & {
  name: string;
};

export const login = ({ email, password }: LoginParams) =>
  firebaseApi.auth().signInWithEmailAndPassword(email, password);

export const register = ({ email, password, name }: RegisterParams) =>
  firebaseApi
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      if (response.user === null) {
        return Promise.reject(new Error('Something went wrong'));
      }

      return response.user
        .updateProfile({
          displayName: name
        })
        .then(() => response);
    });
