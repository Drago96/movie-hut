import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';

const movieApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${process.env.REACT_APP_MOVIE_API_AUTHORIZATION_KEY}`
  }
});

export default movieApi;
