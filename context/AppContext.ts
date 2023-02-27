import { DEFAULT_UNITS } from "consts";
import { MeasurementUnits } from "types";
import { DEFAULT_THEME, ThemeType } from "lib/themes";
import { createContext } from "react";

interface AppContextInterface {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  setRandomTheme: () => void;
  units: MeasurementUnits;
  setUnits: (units: MeasurementUnits) => void;
}

export const defaultAppContext: AppContextInterface = {
  theme: DEFAULT_THEME,
  setTheme: () => {},
  setRandomTheme: () => {},
  units: DEFAULT_UNITS,
  setUnits: () => {},
};

const AppContext = createContext(defaultAppContext);
export default AppContext;
