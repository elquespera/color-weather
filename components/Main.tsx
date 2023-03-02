import { useContext, useEffect, useState } from "react";
import AppContext from "context/AppContext";
import LocationContext from "context/LocationContext";
import { fetchCityData, fetchWeatherData } from "lib/fetchData";

interface MainProps {
  children?: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  const { language, units } = useContext(AppContext);
  const { lon, lat, setLocation, setCity, setWeather, setCurrentCity } =
    useContext(LocationContext);

  const [gpsCoords, setGpsCoord] = useState<{ lat: number; lon: number }>();

  useEffect(() => {
    async function fetchWeather() {
      const weather = await fetchWeatherData(lat, lon, units, language);
      setWeather(weather);
    }

    if (lon === 0 && lat === 0) return;
    // console.log("fetch weather data");
    fetchWeather();
  }, [lon, lat, units, language]);

  useEffect(() => {
    async function fetchCurrentCity() {
      const city = await fetchCityData(lat, lon, language);
      setCity(city?.name);
    }

    if (lon === 0 && lat === 0) return;
    // console.log("fetch city data");
    fetchCurrentCity();
  }, [lon, lat, language]);

  useEffect(() => {
    async function fetchCurrentCity() {
      if (gpsCoords) {
        const city = await fetchCityData(
          gpsCoords.lat,
          gpsCoords.lon,
          language
        );
        setCurrentCity(city);
      } else {
        setCurrentCity(undefined);
      }
    }

    // console.log("fetch current city");
    fetchCurrentCity();
  }, [gpsCoords, language]);

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
    <main className="w-full md:w-max-app min-h-screen pt-header flex">
      <div className="p-6 md:p-8 w-full">{children}</div>
    </main>
  );
}
