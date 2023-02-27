import { getLocalStorage, setLocalStorage } from "@/lib/storage";
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
    });

  function setLocation(lat: number, lon: number) {
    setLocationContext((current) => {
      setLocalStorage({ location: { lat, lon, city: current.city } });
      return { ...current, lat, lon };
    });
  }

  function setCity(city: string) {
    setLocationContext((current) => {
      setLocalStorage({
        location: { lat: current.lat, lon: current.lon, city },
      });
      return { ...current, city };
    });
  }

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setLocation(coords.latitude, coords.longitude);
    });
  }

  useEffect(() => {
    getCurrentLocation();

    const { location: storedLocation } = getLocalStorage();
    if (storedLocation) {
      setLocation(storedLocation.lat, storedLocation.lon);
      setCity(storedLocation.city);
    }
  }, []);

  return locationContext;
}
