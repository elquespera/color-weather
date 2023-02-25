import fetchData from "@/lib/fetchData";
import { useEffect, useState } from "react";
import { CurrentWeatherResponse } from "@/types";

export default function Home() {
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherResponse>();

  useEffect(() => {
    async function fetchWeatherData() {
      const response = await fetchData("weather", {
        lon: 14,
        lat: 50,
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
  }, []);

  return (
    <>
      <h2>Current Conditions</h2>
      {currentWeather && (
        <ul>
          <li>{currentWeather.description}</li>
          <li>{currentWeather.temp}</li>
          <li>{currentWeather.tempFeelsLike}</li>
        </ul>
      )}
    </>
  );
}
