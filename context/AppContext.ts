import { DEFAULT_UNITS } from "consts";
import { MeasurementUnits } from "types";
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
  setRandomTheme: () => void;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  units: MeasurementUnits;
  setUnits: (units: MeasurementUnits) => void;
}

export const defaultAppContext: AppContextInterface = {
  theme: DEFAULT_THEME,
  setTheme: () => {},
  setRandomTheme: () => {},
  themeMode: DEFAULT_THEME_MODE,
  setThemeMode: () => {},
  units: DEFAULT_UNITS,
  setUnits: () => {},
};

const AppContext = createContext(defaultAppContext);
export default AppContext;
