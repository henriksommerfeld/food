import { useEffect, useCallback } from 'react';

export const useEscKey = (action: { (): void }) => {
  const keyDownHandler = useCallback(
    (keyboardEvent) => {
      if (isEscape(keyboardEvent) && isFunction(action)) action();
    },
    [action]
  );

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [keyDownHandler]);
};

const isFunction = (f: any) => typeof f === 'function';
const isEscape = (keyEvent: React.KeyboardEvent) =>
  keyEvent && keyEvent.key === 'Escape';
