import { useContext, useEffect, useState } from "react";
import AppContext from "context/AppContext";
import LocationContext from "context/LocationContext";
import { AppLanguage, City, CurrentWeatherResponse } from "types";
import fetchData from "lib/fetchData";

interface MainProps {
  children?: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  const { language, units } = useContext(AppContext);
  const { city, lon, lat, setLocation, setCity, setWeather, setCurrentCity } =
    useContext(LocationContext);

  const [gpsCoords, setGpsCoord] = useState<{ lat: number; lon: number }>();

  useEffect(() => {
    async function fetchWeatherData() {
      const response = await fetchData("app", "weather", {
        lon,
        lat,
        units,
        lang: language,
      });

      if (response.ok) {
        const data: CurrentWeatherResponse = await response.json();
        setWeather(data);
      } else {
        setWeather(undefined);
      }
    }

    if (lon === 0 && lat === 0) return;
    console.log("fetch weather data");
    fetchWeatherData();
  }, [lon, lat, units, language]);

  useEffect(() => {
    async function fetchCity() {
      const response = await fetchData("app", "city", {
        lang: language,
        lat,
        lon,
      });

      if (response.ok) {
        const city: City = await response.json();
        setCity(city.name);
      }
    }

    if (lon === 0 && lat === 0) return;
    console.log("fetch city data");
    fetchCity();
  }, [lon, lat, language]);

  useEffect(() => {
    async function fetchCurrentCity() {
      if (gpsCoords) {
        const response = await fetchData("app", "city", {
          lang: language,
          lat: gpsCoords.lat,
          lon: gpsCoords.lon,
        });

        if (response.ok) {
          const city: City = await response.json();
          setCurrentCity({
            name: city.name,
            country: city.country,
            lon: city.lon,
            lat: city.lat,
          });
        }
      } else {
        setCurrentCity(undefined);
      }
    }

    console.log("fetch current city");
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
