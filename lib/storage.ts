import { AppLanguage, City, MeasurementUnits } from "types";
import { ThemeMode, ThemeType } from "./themes";

const LOCAL_STORAGE_KEY = "clrw-data";

interface LocalStorageData {
  theme?: ThemeType;
  themeMode?: ThemeMode;
  units?: MeasurementUnits;
  language?: AppLanguage;
  location?: {
    lat: number;
    lon: number;
    city?: string;
  };
  favoriteCities?: City[];
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
  const storedData = getLocalStorage();
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify({ ...storedData, ...data })
  );
}
