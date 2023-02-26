import { createContext } from "react";

interface AppContextInterface {
  location: {
    lat: number;
    lon: number;
    city: string;
  };
}

export const defaultAppContext: AppContextInterface = {
  location: {
    lat: 0,
    lon: 0,
    city: "",
  },
};

export const AppContext = createContext<AppContextInterface>(defaultAppContext);
