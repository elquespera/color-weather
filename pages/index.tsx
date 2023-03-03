import { useContext } from "react";
import Temperature from "components/Temperature";
import WeatherIcon from "components/ui/WeatherIcon";
import TemperatureRange from "components/TemperatureRange";
import useConvertDate from "hooks/useConvertDate";
import LocationContext from "context/LocationContext";
import TemperatureChart from "components/TemperatureChart";
import Box from "components/ui/Box";
import useTranslation from "hooks/useTranslation";
import { lng } from "assets/translations";
import WeatherDetails from "components/WeatherDetails";

export default function Home() {
  const t = useTranslation();
  const [convertDate] = useConvertDate();
  const { weather } = useContext(LocationContext);

  return (
    <>
      {weather && (
        <div className="flex flex-col gap-8 sm:gap-12">
          <Box>
            <div className="text-primary-sub-header ">
              {convertDate(weather.updatedAt)}
            </div>
            <TemperatureRange min={weather.tempMin} max={weather.tempMax} />
          </Box>

          <Box>
            <div className="w-full-mobile self-center overflow-hidden">
              <div className="grid grid-cols-2 gap-x-2 items-center justify-items-center">
                <Temperature
                  value={weather.temp}
                  large
                  className="text-primary-header"
                />
                <WeatherIcon
                  icon={weather.icon}
                  alt={weather.description}
                  large
                />
                <div className="overflow-hidden self-start">
                  <Temperature feelsLike value={weather.tempFeelsLike} />
                </div>
                <div className="text-center self-start overflow-hidden">
                  {weather.description}
                </div>
              </div>
            </div>
          </Box>
          <TemperatureChart weather={weather.extended} />

          <Box title={t(lng.currentDetails)}>
            <WeatherDetails
              humidity={weather.humidity}
              pressure={weather.pressure}
              visibility={weather.visibility}
              sunrise={weather.sunrise}
              sunset={weather.sunset}
              wind={weather.wind}
            />
          </Box>
        </div>
      )}
    </>
  );
}
