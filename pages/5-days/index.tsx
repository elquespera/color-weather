import Box from "components/ui/Box";
import LocationContext from "context/LocationContext";
import { useContext, useEffect, useState } from "react";
import { WeatherDataPoint } from "types";
import DailyWeather from "components/DailyWeather";

const DATA_POINTS_PER_DAY = 8;

export default function Tomorrow() {
  const { weather: currentWeather } = useContext(LocationContext);
  const [weather, setWeather] = useState<Array<WeatherDataPoint[]>>([]);

  useEffect(() => {
    const timezone = currentWeather?.timezone || 0;
    const allWeather =
      currentWeather?.extended.map((point) => {
        return { ...point, dt: point.dt + timezone };
      }) || [];
    if (allWeather.length === 0) return;
    let date = new Date(allWeather[0].dt).getUTCDate();
    let startIndex = 0;
    const newWeather: Array<WeatherDataPoint[]> = [];
    allWeather.forEach((point, index) => {
      const newDate = new Date(point.dt).getUTCDate();
      if (date !== newDate || index === allWeather.length - 1) {
        date = newDate;
        newWeather.push(
          allWeather.slice(startIndex, startIndex + DATA_POINTS_PER_DAY)
        );
        startIndex = index;
      }
    });

    setWeather(newWeather);
  }, [currentWeather]);

  return (
    <>
      {weather.map((point, index) => (
        <DailyWeather key={index} weather={point} />
      ))}
    </>
  );
}
