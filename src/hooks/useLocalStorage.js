import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      });
      const setValue = value => {
        // Save state
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
      };

  return [storedValue, setValue];
};

// should work almost exactly like useState - except any value that is controlled by this hook will be saved and persisted to localStorage
export default useLocalStorage;

