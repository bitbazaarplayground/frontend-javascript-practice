import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  const updateValue = (newValue) => {
    try {
      setValue((currentValue) => {
        const resolvedValue =
          typeof newValue === "function" ? newValue(currentValue) : newValue;

        localStorage.setItem(key, JSON.stringify(resolvedValue));
        return resolvedValue;
      });
    } catch (error) {
      console.error("Error writing localStorage key:", key, error);
    }
  };

  return [value, updateValue];
}
