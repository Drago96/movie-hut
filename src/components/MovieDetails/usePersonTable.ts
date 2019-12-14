import { useState, useCallback, useRef } from 'react';
import useEventListener from 'hooks/useEventListener';

const usePersonTable = () => {
  const [expand, setExpand] = useState(false);
  const [expanding, setExpanding] = useState(false);
  const [hasScrolledDuringExpand, setScrolledDuringExpand] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);

  const scrollHandler = useCallback(() => {
    if (expanding && !hasScrolledDuringExpand) {
      setScrolledDuringExpand(true);
    }
  }, [expanding, hasScrolledDuringExpand, setScrolledDuringExpand]);

  useEventListener('scroll', scrollHandler);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  const handleExpanding = () => {
    setExpanding(true);
    setScrolledDuringExpand(false);
  };

  const scrollToTop = () => {
    if (!tableRef.current) {
      return;
    }

    const offsetHeight = 80;

    window.scrollTo({
      top: tableRef.current.offsetTop - offsetHeight,
      behavior: 'smooth'
    });
  };

  const handleExpanded = () => {
    setExpanding(false);

    if (hasScrolledDuringExpand) {
      return;
    }

    scrollToTop();
  };

  return {
    tableRef,
    expand,
    toggleExpand,
    handleExpanding,
    handleExpanded,
    scrollToTop
  };
};

export default usePersonTable;
