import fetchData from "lib/fetchData";
import { useContext, useEffect, useState } from "react";
import { CurrentWeatherResponse } from "types";
import AppContext from "context/AppContext";
import Temperature from "components/Temperature";
import WeatherIcon from "components/ui/WeatherIcon";
import TemperatureRange from "components/TemperatureRange";
import useConvertDate from "hooks/useConvertDate";
import LocationContext from "context/LocationContext";

export default function Home() {
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherResponse>();
  const convertDate = useConvertDate();
  const { units, language } = useContext(AppContext);
  const location = useContext(LocationContext);

  useEffect(() => {
    async function fetchWeatherData() {
      const response = await fetchData("weather", {
        lon: location.lon,
        lat: location.lat,
        units,
        lang: language,
      });

      if (response.ok) {
        const data: CurrentWeatherResponse = await response.json();
        location.setCity(data.city);
        setCurrentWeather(data);
      } else {
        setCurrentWeather(undefined);
      }
    }
    if (location.lon === 0 && location.lat === 0) return;
    fetchWeatherData();
  }, [location, units, language]);

  return (
    <>
      {currentWeather && (
        <div className="flex flex-col">
          <div>{currentWeather.city}</div>
          <div className="text-primary-sub-header">
            {convertDate(currentWeather.updatedAt)}
          </div>
          <TemperatureRange
            min={currentWeather.tempMin}
            max={currentWeather.tempMax}
          />
          <div className="mt-4 grid grid-cols-2 items-center justify-items-center">
            <Temperature
              value={currentWeather.temp}
              large
              className="text-primary-header"
            />
            <WeatherIcon
              icon={currentWeather.icon}
              alt={currentWeather.description}
              large
            />
            <Temperature feelsLike value={currentWeather.tempFeelsLike} />
            <div className="capitalize">{currentWeather.description}</div>
          </div>
        </div>
      )}
    </>
  );
}
