import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RequestState from 'types/RequestState';
import useDeepEqualRef from './useDeepEqualRef';
import useLoadingOverlay from './useLoadingOverlay';
import useWindowScroll from './useWindowScroll';

export type UseRequestSliceResult = RequestState<any>;

export type UseRequestSliceOptions = {
  params?: {
    [key: string]: any;
  };
  showLoadingOverlay?: boolean;
  scrollToTop?: boolean;
};

const useRequestSlice = <T extends any>(
  slice: T,
  options: UseRequestSliceOptions = {}
): UseRequestSliceResult => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state: any) => state[slice.name].isLoading);
  const error = useSelector((state: any) => state[slice.name].error);
  const data = useSelector((state: any) => state[slice.name].data);

  const paramsForDispatch = useDeepEqualRef(options.params);

  useEffect(() => {
    dispatch(slice.actions.start(paramsForDispatch));
  }, [dispatch, slice, paramsForDispatch]);

  useEffect(() => {
    return () => {
      dispatch(slice.actions.cancel());
    };
  }, [dispatch, slice]);

  useLoadingOverlay(options.showLoadingOverlay && isLoading);
  useWindowScroll(Boolean(options.scrollToTop) && !isLoading, 0);

  return {
    isLoading,
    error,
    data
  };
};

export default useRequestSlice;
