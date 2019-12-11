import { useEffect } from 'react';

const useWindowScroll = (shouldScroll: boolean, top: number) => {
  useEffect(() => {
    if (shouldScroll) {
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [shouldScroll, top]);
};

export default useWindowScroll;
