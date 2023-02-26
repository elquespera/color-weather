import { MeasurementUnits } from "@/types";
import { DEFAULT_THEME, ThemeAction, ThemeType } from "lib/themes";
import { createContext } from "react";

interface AppContextInterface {
  location: {
    lat: number;
    lon: number;
    city: string;
  };
  theme: ThemeType;
  units: MeasurementUnits;
  setTheme: (action: ThemeAction) => void;
}

export const defaultAppContext: AppContextInterface = {
  location: {
    lat: 0,
    lon: 0,
    city: "",
  },
  theme: DEFAULT_THEME,
  units: "metric",
  setTheme: () => {},
};

export const AppContext = createContext<AppContextInterface>(defaultAppContext);
