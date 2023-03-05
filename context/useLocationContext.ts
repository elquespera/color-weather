const LOCATION_PRECISION = 100000;

import {
  City,
  CurrentWeatherResponse,
  GPSCoordinates,
  LocationState,
} from "types";
import { useState } from "react";
import {
  defaultLocationContext,
  LocationContextInterface,
} from "./LocationContext";
import { setLocalStorage } from "lib/storage";

export default function useLocationContext() {
  const [locationContext, setLocationContext] =
    useState<LocationContextInterface>({
      ...defaultLocationContext,
      setCity,
      setLocation,
      defineLocation,
      setLocationState,
      setWeather,
      setCurrentCity,
    });

  function setLocation(latitude: number, longitude: number) {
    const location = {
      lat: Math.round(latitude * LOCATION_PRECISION) / LOCATION_PRECISION,
      lon: Math.round(longitude * LOCATION_PRECISION) / LOCATION_PRECISION,
    };
    setLocationContext((current) => {
      setLocalStorage({ location });
      return { ...current, ...location };
    });
  }

  function setGpsCoord(gpsCoords?: GPSCoordinates) {
    setLocationContext((current) => {
      return { ...current, gpsCoords };
    });
  }

  function setLocationState(locationState: LocationState) {
    setLocationContext((current) => {
      return { ...current, locationState };
    });
  }

  function setWeather(weather?: CurrentWeatherResponse) {
    setLocationContext((current) => {
      return { ...current, weather };
    });
  }

  function setCity(city?: string) {
    setLocationContext((current) => {
      return { ...current, city };
    });
  }

  function setCurrentCity(city?: City) {
    setLocationContext((current) => {
      return { ...current, currentCity: city };
    });
  }

  function defineLocation() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setGpsCoord({ lat: coords.latitude, lon: coords.longitude });
        setLocation(coords.latitude, coords.longitude);
        setLocationState("granted");
      },
      (e) => {
        const code = e.code;
        setGpsCoord(undefined);
        setLocationState(
          code === e.PERMISSION_DENIED
            ? "denied"
            : code === e.POSITION_UNAVAILABLE
            ? "unavailable"
            : "timeout"
        );
      },
      { timeout: 10000 }
    );
  }

  return locationContext;
}
