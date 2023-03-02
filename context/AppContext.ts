import { DEFAULT_APP_LANGUAGE, DEFAULT_UNITS } from "consts";
import { AppLanguage, AppState, MeasurementUnits } from "types";
import {
  DEFAULT_THEME,
  DEFAULT_THEME_MODE,
  ThemeMode,
  ThemeType,
} from "lib/themes";
import { createContext } from "react";

interface AppContextInterface {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  nextTheme: (theme: ThemeType) => void;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  units: MeasurementUnits;
  setUnits: (units: MeasurementUnits) => void;
  language: AppLanguage;
  setLanguage: (language: AppLanguage) => void;
  appState: AppState;
  setAppState: (state: AppState) => void;
}

export const defaultAppContext: AppContextInterface = {
  theme: DEFAULT_THEME,
  setTheme: () => {},
  nextTheme: () => {},
  themeMode: DEFAULT_THEME_MODE,
  setThemeMode: () => {},
  units: DEFAULT_UNITS,
  setUnits: () => {},
  language: DEFAULT_APP_LANGUAGE,
  setLanguage: () => {},
  appState: "ready",
  setAppState: () => {},
};

const AppContext = createContext(defaultAppContext);
export default AppContext;
