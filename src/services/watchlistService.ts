import { some } from 'lodash';

import Watchlist from 'types/Watchlist';
import WatchlistItem from 'types/WatchlistItem';
import firebaseApi from './api/firebaseApi';

const watchlists = firebaseApi.firestore().collection('watchlists');

export const create = (userId: string) => {
  const watchlist: Watchlist = {
    userId,
    movies: []
  };

  return watchlists.doc(userId).set(watchlist);
};

export const get = (userId: string) => {
  return watchlists
    .doc(userId)
    .get()
    .then(document => {
      return document.data() as Watchlist;
    });
};

export const add = (userId: string, movie: WatchlistItem) => {
  return get(userId).then(watchlist => {
    const newMovies = [...watchlist.movies, movie];

    return watchlists.doc(userId).set({ userId, movies: newMovies });
  });
};

export const remove = (userId: string, movieId: number) => {
  return get(userId).then(watchlist => {
    const newMovies = watchlist.movies.filter(movie => movie.id !== movieId);

    return watchlists.doc(userId).set({ userId, movies: newMovies });
  });
};

export const isWatchlisted = (userId: string, movieId: number) => {
  return get(userId).then((watchlist: Watchlist) => {
    return some(watchlist?.movies, movie => movie.id === movieId);
  });
};
