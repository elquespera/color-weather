import { getLocalStorage, setLocalStorage } from "lib/storage";
import { City, CurrentWeatherResponse } from "types";
import { useEffect, useState } from "react";
import {
  defaultLocationContext,
  LocationContextInterface,
} from "./LocationContext";

export default function useLocationContext() {
  const [locationContext, setLocationContext] =
    useState<LocationContextInterface>({
      ...defaultLocationContext,
      setCity,
      setLocation,
      setWeather,
      setCurrentCity,
    });

  function setLocation(latitude: number, longitude: number) {
    const precision = 10000;
    const lat = Math.round(latitude * precision) / precision;
    const lon = Math.round(longitude * precision) / precision;
    setLocationContext((current) => {
      setLocalStorage({ location: { lat, lon, city: current.city } });
      return { ...current, lat, lon };
    });
  }

  function setWeather(weather?: CurrentWeatherResponse) {
    setLocationContext((current) => {
      return { ...current, weather };
    });
  }

  function setCity(city?: string) {
    setLocationContext((current) => {
      setLocalStorage({
        location: { lat: current.lat, lon: current.lon, city },
      });
      return { ...current, city };
    });
  }

  function setCurrentCity(city?: City) {
    setLocationContext((current) => {
      return { ...current, currentCity: city };
    });
  }

  useEffect(() => {
    const { location } = getLocalStorage();
    if (location) {
      setLocation(location.lat, location.lon);
      setCity(location.city);
    }
  }, []);

  return locationContext;
}
