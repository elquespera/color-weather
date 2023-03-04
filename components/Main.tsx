import { useContext, useEffect, useState } from "react";
import AppContext from "context/AppContext";
import LocationContext from "context/LocationContext";
import { fetchCityData, fetchWeatherData } from "lib/fetchData";
import Spinner from "./Spinner";

interface MainProps {
  children?: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  const { language, units, setAppState } = useContext(AppContext);
  const { lon, lat, setLocation, setCity, setWeather, setCurrentCity } =
    useContext(LocationContext);

  const [gpsCoords, setGpsCoord] = useState<{ lat: number; lon: number }>();

  useEffect(() => {
    async function fetchWeather() {
      try {
        setAppState("fetching");
        const weather = await fetchWeatherData(lat, lon, units, language);
        setWeather(weather);
      } finally {
        setAppState("ready");
      }
    }

    if (lon === 0 && lat === 0) return;
    fetchWeather();
  }, [lon, lat, units, language]);

  useEffect(() => {
    async function fetchCurrentCity() {
      try {
        setAppState("fetching");
        const city = await fetchCityData(lat, lon, language);
        setCity(city?.name);
      } finally {
        setAppState("ready");
      }
    }

    if (lon === 0 && lat === 0) return;
    fetchCurrentCity();
  }, [lon, lat, language]);

  useEffect(() => {
    async function fetchCurrentCity() {
      try {
        setAppState("fetching");
        if (gpsCoords) {
          const city = await fetchCityData(
            gpsCoords.lat,
            gpsCoords.lon,
            language
          );
          if (city) {
            city.weather = await fetchWeatherData(
              gpsCoords.lat,
              gpsCoords.lon,
              units,
              language
            );
          }
          setCurrentCity(city);
        } else {
          setCurrentCity(undefined);
        }
      } finally {
        setAppState("ready");
      }
    }

    fetchCurrentCity();
  }, [gpsCoords, language, units]);

  useEffect(() => {
    function defineLocation() {
      navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        setGpsCoord({ lat: coords.latitude, lon: coords.longitude });
        setLocation(coords.latitude, coords.longitude);
      });
    }

    defineLocation();
  }, []);

  return (
    <main className="relative w-full md:w-max-app min-h-screen pt-header flex">
      <div className="py-app sm:py-app-lg w-full">{children}</div>
      <Spinner />
    </main>
  );
}
