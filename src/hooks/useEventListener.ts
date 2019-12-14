import { useRef, useEffect } from 'react';

type UseEventListener = (
  eventName: string,
  handler: EventListener,
  element?: HTMLElement | Window
) => void;

const useEventListener: UseEventListener = (
  eventName,
  handler,
  element = window
) => {
  const savedHandler = useRef<EventListenerOrEventListenerObject>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener: EventListener = event =>
      (savedHandler.current as EventListener)(event);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

export default useEventListener;
