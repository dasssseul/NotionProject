const getStorage = () => window.localStorage;

export const getItem = (key, defaultValue) => {
  try {
    const storedValue = getStorage().getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

export const setItem = (key, value) => {
  getStorage().setItem(key, JSON.stringify(value));
};

export const removeItem = (key) => {
  getStorage().removeItem(key);
};

export const StorageUtils = { getItem, setItem, removeItem };
