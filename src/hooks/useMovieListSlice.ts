import Modify from 'types/Modify';
import MovieList from 'types/MovieList';
import movieResultsSlice from 'store/slices/movieResultsSlice';
import useInitiateRequestSlice, {
  UseInitiateRequestSliceOptions
} from './useInitiateRequestSlice';
import { ResponseResult } from './useRequestSlice';
import useQueryParams from './useQueryParams';

export type UseMovieListSliceOptions = {
  url: string;
} & UseInitiateRequestSliceOptions;

type UseMovieListSliceResult = Modify<
  ResponseResult,
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

  return useInitiateRequestSlice(movieResultsSlice, {
    params: { url, page, ...params },
    showLoadingOverlay: true,
    scrollToTop: true
  });
};

export default useMovieListSlice;
