import { createContext } from "react";

export interface LocationContextInterface {
  lat: number;
  lon: number;
  city: string;
  setLocation: (latitude: number, longitude: number) => void;
  setCity: (city: string) => void;
}

export const defaultLocationContext: LocationContextInterface = {
  lat: 0,
  lon: 0,
  city: "",
  setLocation: () => {},
  setCity: () => {},
};

const LocationContext = createContext<LocationContextInterface>(
  defaultLocationContext
);

export default LocationContext;
