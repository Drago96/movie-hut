import { useRef } from 'react';
import { isEqual } from 'lodash';

const useDeepEqualRef = (nextValue: any) => {
  const ref = useRef(nextValue);

  if (!isEqual(nextValue, ref.current)) {
    ref.current = nextValue;
  }

  return ref.current;
};

export default useDeepEqualRef;
