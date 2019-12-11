import { useEffect, useCallback } from 'react';

export const useKeys = (keys: string[], action) => {
  const keyDownHandler = useCallback(
    keyboardEvent => {
      if (isKeys(keyboardEvent, keys) && isFunction(action))
        action(keyboardEvent);
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
const isKeys = (keyEvent: React.KeyboardEvent, keys: string[]) =>
  keyEvent && keys.includes(keyEvent.key);
