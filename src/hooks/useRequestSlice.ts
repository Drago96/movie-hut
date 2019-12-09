import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useDeepEqualRef from './useDeepEqualRef';

const useRequestSlice = (slice: any, params = {}) => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state: any) => state[slice.name].isLoading);
  const error = useSelector((state: any) => state[slice.name].error);
  const data = useSelector((state: any) => state[slice.name].data);

  const paramsForDispatch = useDeepEqualRef(params);

  useEffect(() => {
    dispatch(slice.actions.start(paramsForDispatch));
  }, [dispatch, slice, paramsForDispatch]);

  return {
    isLoading,
    error,
    data
  };
};

export default useRequestSlice;
