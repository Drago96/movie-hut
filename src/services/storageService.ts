export const get = (key: string) => localStorage.getItem(key);

export const set = (key: string, value: string) =>
  localStorage.setItem(key, value);
