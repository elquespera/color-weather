import Box from "components/ui/Box";
import LocationContext from "context/LocationContext";
import { useContext, useEffect, useState } from "react";
import { WeatherDataPoint } from "types";
import DailyWeather from "components/DailyWeather";

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
    let slice: WeatherDataPoint[] = [];
    const newWeather: Array<WeatherDataPoint[]> = [];
    allWeather.forEach((point, index) => {
      const newDate = new Date(point.dt).getUTCDate();
      if (date !== newDate || index === allWeather.length - 1) {
        date = newDate;
        newWeather.push(slice);
        slice = [];
      }
      slice.push(point);
    });

    setWeather(newWeather);
  }, [currentWeather]);

  return (
    <Box>
      {weather.map((point, index) => (
        <DailyWeather key={index} weather={point} />
      ))}
    </Box>
  );
}
