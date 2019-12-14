import { useCallback, useEffect } from 'react';

import useRequestSlice, { ResponseResult } from './useRequestSlice';
import useDeepEqualRef from './useDeepEqualRef';

export type UseInitiateRequestSliceOptions = {
  params?: {
    [key: string]: any;
  };
  showLoadingOverlay?: boolean;
  scrollToTop?: boolean;
};

export type UseInitiateRequestSliceResult = ResponseResult & {
  reinitiate: () => void;
};

const useInitiateRequestSlice = <T extends any>(
  slice: T,
  options: UseInitiateRequestSliceOptions = {}
): UseInitiateRequestSliceResult => {
  const [
    initiateRequest,
    { isLoading, error, data, success }
  ] = useRequestSlice(slice, options);

  const paramsForDispatch = useDeepEqualRef(options.params);

  const reinitiate = useCallback(() => initiateRequest(paramsForDispatch), [
    initiateRequest,
    paramsForDispatch
  ]);

  useEffect(() => reinitiate(), [reinitiate]);

  return {
    isLoading,
    error,
    data,
    reinitiate,
    success
  };
};

export default useInitiateRequestSlice;
