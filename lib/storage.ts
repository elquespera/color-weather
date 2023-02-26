import { ThemeType } from "./themes";

const LOCAL_STORAGE_KEY = "clrw-data";

interface LocalStorageData {
  theme?: ThemeType;
}

export function getLocalStorage(): LocalStorageData {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!data) return {};
  try {
    return JSON.parse(data);
  } catch {
    return {};
  }
}

export function setLocalStorage(data: LocalStorageData) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}
