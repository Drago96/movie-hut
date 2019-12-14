import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import ResponseState from 'types/ResponseState';
import useLoadingOverlay from './useLoadingOverlay';

type RequestParams =
  | undefined
  | {
      [key: string]: any;
    };

export type ResponseResult = ResponseState<any> & {
  success: boolean;
};

export type UseRequestSliceResult = [
  (params: RequestParams) => void,
  ResponseResult
];

export type UseRequestSliceOptions = {
  showLoadingOverlay?: boolean;
  scrollToTop?: boolean;
};

const useRequestSlice = <T extends any>(
  slice: T,
  options: UseRequestSliceOptions = {}
): UseRequestSliceResult => {
  const dispatch = useDispatch();

  const { isLoading, error, data } = useSelector(
    (state: any) => state[slice.name],
    shallowEqual
  );
  const success = !isLoading && Boolean(data);

  const initiateRequest = useCallback(
    (params: RequestParams) => {
      dispatch(slice.actions.start(params));
    },
    [dispatch, slice]
  );

  useEffect(() => {
    return () => {
      dispatch(slice.actions.cancel());
    };
  }, [dispatch, slice]);

  useLoadingOverlay(options.showLoadingOverlay && isLoading);

  const shouldScroll = Boolean(options.scrollToTop) && !isLoading;

  useEffect(() => {
    if (shouldScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [shouldScroll]);

  return [
    initiateRequest,
    {
      isLoading,
      error,
      data,
      success
    }
  ];
};

export default useRequestSlice;
