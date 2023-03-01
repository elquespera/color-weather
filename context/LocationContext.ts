import { createContext } from "react";
import { City, CurrentWeatherResponse } from "types";

export interface LocationContextInterface {
  lat: number;
  lon: number;
  setLocation: (latitude: number, longitude: number) => void;

  city?: string;
  setCity: (city?: string) => void;

  weather?: CurrentWeatherResponse;
  setWeather: (weather?: CurrentWeatherResponse) => void;

  currentCity?: City;
  setCurrentCity: (city?: City) => void;
}

export const defaultLocationContext: LocationContextInterface = {
  lat: 0,
  lon: 0,
  setLocation: () => {},
  city: "",
  setCity: () => {},
  setWeather: () => {},
  setCurrentCity: () => {},
};

const LocationContext = createContext<LocationContextInterface>(
  defaultLocationContext
);

export default LocationContext;
