import React, { Dispatch } from 'react';

export function useLocalStorageState<T>(
  key: string,
  defaultValue: T
): [T, Dispatch<React.SetStateAction<T>>] {
  const hasLocalStorage = localStorageIsAvailable();
  const storedValue = hasLocalStorage
    ? localStorage.getItem(key)
    : `${defaultValue}`;
  const parsedValue = parseValue(storedValue);
  const [value, setValue] = React.useState(parsedValue);

  function parseValue(v: string) {
    return JSON.parse(v) || defaultValue;
  }

  React.useEffect(() => {
    if (hasLocalStorage) localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}

export function localStorageIsAvailable(): boolean {
  return typeof localStorage !== 'undefined';
}
