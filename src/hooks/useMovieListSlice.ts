import Modify from 'types/Modify';
import MovieList from 'types/MovieList';
import movieListSlice from 'store/slices/movieListSlice';
import useRequestSlice, {
  UseRequestSliceOptions,
  UseRequestSliceResult
} from './useRequestSlice';
import useQueryParams from './useQueryParams';

export type UseMovieListSliceOptions = { url: string } & UseRequestSliceOptions;

type UseMovieListSliceResult = Modify<
  UseRequestSliceResult,
  {
    data: MovieList;
  }
>;

type UseMovieListSlice = (
  options: UseMovieListSliceOptions
) => UseMovieListSliceResult;

const useMovieListSlice: UseMovieListSlice = (
  { url, params } = { url: '', params: {} }
) => {
  const {
    params: { page }
  } = useQueryParams();

  return useRequestSlice(movieListSlice, {
    params: { url, page, ...params },
    showLoadingOverlay: true,
    scrollToTop: true
  });
};

export default useMovieListSlice;
