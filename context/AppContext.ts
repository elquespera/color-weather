import {
  DEFAULT_THEME,
  setRandomTheme,
  ThemeAction,
  ThemeType,
} from "lib/themes";
import { createContext } from "react";

interface AppContextInterface {
  location: {
    lat: number;
    lon: number;
    city: string;
  };
  theme: ThemeType;
  setTheme: (action: ThemeAction) => void;
}

export const defaultAppContext: AppContextInterface = {
  location: {
    lat: 0,
    lon: 0,
    city: "",
  },
  theme: DEFAULT_THEME,
  setTheme: () => {},
};

export const AppContext = createContext<AppContextInterface>(defaultAppContext);
