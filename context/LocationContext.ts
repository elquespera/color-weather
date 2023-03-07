import { createContext } from "react";
import {
  City,
  CurrentWeatherResponse,
  GPSCoordinates,
  LocationState,
} from "types";

export interface LocationContextInterface {
  lat: number;
  lon: number;
  setLocation: (latitude: number, longitude: number) => void;
  defineLocation: () => void;

  gpsCoords?: GPSCoordinates;
  locationState: LocationState;
  setLocationState: (state: LocationState) => void;

  city?: string;
  setCity: (city?: string) => void;

  weather?: CurrentWeatherResponse;
  setWeather: (weather?: CurrentWeatherResponse) => void;

  currentCity?: City;
  setCurrentCity: (city?: City) => void;

  updateSeed?: number;
  updateWeather: () => void;
}

export const defaultLocationContext: LocationContextInterface = {
  lat: 0,
  lon: 0,
  setLocation: () => {},
  defineLocation: () => {},
  locationState: "not-requested",
  setLocationState: () => {},
  city: "",
  setCity: () => {},
  setWeather: () => {},
  setCurrentCity: () => {},
  updateWeather: () => {},
};

const LocationContext = createContext<LocationContextInterface>(
  defaultLocationContext
);

export default LocationContext;
