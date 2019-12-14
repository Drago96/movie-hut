import Movie from './Movie';
import Credits from './Credits';
import MovieList from './MovieList';

type MovieDetails = {
  movie: Movie;
  credits: Credits;
  similarMovies: MovieList;
  watchlisted: boolean;
};

export default MovieDetails;
