import { useEffect } from 'react';

import useRequestSlice, { ResponseResult } from './useRequestSlice';
import useDeepEqualRef from './useDeepEqualRef';

export type UseInitiateRequestSliceOptions = {
  params?: {
    [key: string]: any;
  };
  showLoadingOverlay?: boolean;
  scrollToTop?: boolean;
};

const useInitiateRequestSlice = <T extends any>(
  slice: T,
  options: UseInitiateRequestSliceOptions = {}
): ResponseResult => {
  const [
    initiateRequest,
    { isLoading, error, data, success }
  ] = useRequestSlice(slice, options);

  const paramsForDispatch = useDeepEqualRef(options.params);

  useEffect(() => initiateRequest(paramsForDispatch), [
    initiateRequest,
    paramsForDispatch
  ]);

  return {
    isLoading,
    error,
    data,
    success
  };
};

export default useInitiateRequestSlice;
