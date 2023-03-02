import { useContext } from "react";
import Temperature from "components/Temperature";
import WeatherIcon from "components/ui/WeatherIcon";
import TemperatureRange from "components/TemperatureRange";
import useConvertDate from "hooks/useConvertDate";
import LocationContext from "context/LocationContext";

export default function Home() {
  const convertDate = useConvertDate();
  const { weather, city } = useContext(LocationContext);

  return (
    <>
      {weather && (
        <div className="flex flex-col">
          <div>{city}</div>
          <div className="text-primary-sub-header">
            {convertDate(weather.updatedAt)}
          </div>
          <TemperatureRange min={weather.tempMin} max={weather.tempMax} />
          <div className="mt-4 sm:mt-8 md:mt-12 grid grid-cols-2 gap-x-2 items-center justify-items-center">
            <Temperature
              value={weather.temp}
              large
              className="text-primary-header"
            />
            <WeatherIcon icon={weather.icon} alt={weather.description} large />
            <div className="overflow-hidden self-end">
              <Temperature feelsLike value={weather.tempFeelsLike} />
            </div>
            <div className="text-center self-end overflow-hidden">
              {weather.description}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
