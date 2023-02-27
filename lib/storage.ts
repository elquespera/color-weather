import { MeasurementUnits } from "@/types";
import { ThemeType } from "./themes";

const LOCAL_STORAGE_KEY = "clrw-data";

interface LocalStorageData {
  theme?: ThemeType;
  units?: MeasurementUnits;
  location?: {
    lat: number;
    lon: number;
    city: string;
  };
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
