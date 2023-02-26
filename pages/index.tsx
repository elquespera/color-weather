import fetchData from "@/lib/fetchData";
import { useContext, useEffect, useState } from "react";
import { CurrentWeatherResponse } from "@/types";
import { AppContext } from "@/context/AppContext";
import Temperature from "@/components/Temperature";

export default function Home() {
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherResponse>();

  const { location, units } = useContext(AppContext);

  useEffect(() => {
    async function fetchWeatherData() {
      const response = await fetchData("weather", {
        lon: location.lon,
        lat: location.lat,
        units,
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
      {currentWeather && (
        <ul>
          <li>
            <Temperature
              value={currentWeather.temp}
              large
              className="text-primary-dark"
            />{" "}
            {}
          </li>
          <li>
            Feels like:
            <Temperature value={currentWeather.tempFeelsLike} />
          </li>
          <li>{`${currentWeather.city} (lat: ${location.lat} lon: ${location.lon})`}</li>
          <li>{currentWeather.description}</li>
        </ul>
      )}
    </>
  );
}
