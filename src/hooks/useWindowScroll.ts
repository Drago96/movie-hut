import { useLayoutEffect } from 'react';

const useWindowScroll = (shouldScroll: boolean, top: number) => {
  useLayoutEffect(() => {
    if (shouldScroll) {
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [shouldScroll, top]);
};

export default useWindowScroll;
