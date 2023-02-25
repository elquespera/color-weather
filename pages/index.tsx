import fetchData from "@/lib/fetchData";
import { useEffect, useState } from "react";
import { CurrentWeatherResponse } from "@/types";

export default function Home() {
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherResponse>();

  useEffect(() => {
    async function fetchWeatherData() {
      const response = await fetchData("weather", {
        lon: 50,
        lat: 14,
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
          <li>{currentWeather.temp}</li>
          <li>{currentWeather.tempFeelsLike}</li>
        </ul>
      )}
    </>
  );
}
