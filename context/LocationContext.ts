import { createContext } from "react";

export interface LocationContextInterface {
  lat: number;
  lon: number;
  city: string;
  setCity: (city: string) => void;
}

export const defaultLocationContext: LocationContextInterface = {
  lat: 0,
  lon: 0,
  city: "",
  setCity: () => {},
};

const LocationContext = createContext<LocationContextInterface>(
  defaultLocationContext
);

export default LocationContext;
