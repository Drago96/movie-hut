import axios, { AxiosInstance } from 'axios';
import applyConverters from 'axios-case-converter';

const baseURL = 'https://api.themoviedb.org/3';

const movieApi = applyConverters(
  axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${process.env.REACT_APP_MOVIE_API_AUTHORIZATION_KEY}`
    }
  }) as any
) as AxiosInstance;

export default movieApi;
