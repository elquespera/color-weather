import { createContext } from "react";
import { City, CurrentWeatherResponse } from "types";

export interface LocationContextInterface {
  lat: number;
  lon: number;
  city: string;
  weather?: CurrentWeatherResponse;

  currentCity?: City;
  savedCities: City[];

  setLocation: (latitude: number, longitude: number) => void;
  setCity: (city: string) => void;
  setWeather: (weather?: CurrentWeatherResponse) => void;
  setCurrentCity: (city?: City) => void;
  setSavedCities: (cities: City[]) => void;
}

export const defaultLocationContext: LocationContextInterface = {
  lat: 0,
  lon: 0,
  city: "",
  savedCities: [],
  setLocation: () => {},
  setCity: () => {},
  setWeather: () => {},
  setCurrentCity: () => {},
  setSavedCities: () => {},
};

const LocationContext = createContext<LocationContextInterface>(
  defaultLocationContext
);

export default LocationContext;
