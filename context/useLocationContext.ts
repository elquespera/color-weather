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
    const precision = 10000;
    const lat = Math.round(latitude * precision) / precision;
    const lon = Math.round(longitude * precision) / precision;
    setLocationContext((current) => {
      setLocalStorage({ location: { lat, lon } });
      return { ...current, lat, lon };
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
