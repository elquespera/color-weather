import fetchData from "@/lib/fetchData";
import { useContext, useEffect, useState } from "react";
import { CurrentWeatherResponse } from "@/types";
import { AppContext } from "@/context/AppContext";

export default function Home() {
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherResponse>();

  const { location } = useContext(AppContext);

  useEffect(() => {
    async function fetchWeatherData() {
      const response = await fetchData("weather", {
        lon: location.lon,
        lat: location.lat,
        units: "metric",
        lang: "en",
      });

      if (response.ok) {
        const data: CurrentWeatherResponse = await response.json();
        setCurrentWeather(data);
      } else {
        setCurrentWeather(undefined);
      }
    }

    fetchWeatherData();
  }, [location]);

  return (
    <>
      <h2>Current Conditions</h2>
      {currentWeather && (
        <ul>
          <li>{`${currentWeather.city} (lat: ${location.lat} lon: ${location.lon})`}</li>
          <li>{currentWeather.description}</li>
          <li>{currentWeather.temp}</li>
          <li>{currentWeather.tempFeelsLike}</li>
        </ul>
      )}
    </>
  );
}
