import { DEFAULT_UNITS } from "consts";
import { MeasurementUnits } from "types";
import { DEFAULT_THEME, ThemeType } from "lib/themes";
import { createContext } from "react";

interface AppContextInterface {
  location: {
    lat: number;
    lon: number;
    city: string;
  };
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  setRandomTheme: () => void;
  units: MeasurementUnits;
  setUnits: (units: MeasurementUnits) => void;
}

export const defaultAppContext: AppContextInterface = {
  location: {
    lat: 0,
    lon: 0,
    city: "",
  },
  theme: DEFAULT_THEME,
  setTheme: () => {},
  setRandomTheme: () => {},
  units: DEFAULT_UNITS,
  setUnits: () => {},
};

const AppContext = createContext<AppContextInterface>(defaultAppContext);
export default AppContext;
