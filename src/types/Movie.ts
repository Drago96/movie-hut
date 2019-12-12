import Genre from './Genre';

type Movie = {
  id: number;
  budget: number;
  title: string;
  genres: [Genre];
  homepage: string;
  imdbId: string;
  overview: string;
  releaseDate: string;
  voteCount: number;
  voteAverage: number;
  posterPath: string;
  runtime: number;
  adult: boolean;
};

export default Movie;
