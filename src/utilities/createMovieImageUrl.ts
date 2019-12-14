type MovieImageUrlParams = {
  relativeUrl: string;
  width: number;
};

type MovieImageUrl = (params: MovieImageUrlParams) => string;

const createMovieImageUrl: MovieImageUrl = ({ relativeUrl, width }) =>
  relativeUrl ? `https://image.tmdb.org/t/p/w${width}/${relativeUrl}` : '';

export default createMovieImageUrl;
