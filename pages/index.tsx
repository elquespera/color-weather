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
import { POLLUTION_LEVELS, TIMEZONE_OFFSET } from "consts";
import LocalTime from "components/LocalTime";
import AirQuality from "components/AirQuality";
import AirQualityLevel from "@/components/AirQualityLevel";
import { PollutantLevels } from "@/types";

export default function Home() {
  const t = useTranslation();
  const [, , convertTime] = useConvertDate();
  const { weather } = useContext(LocationContext);
  const timezone = weather?.timezone || 0;

  return (
    <>
      {weather && (
        <div className="flex flex-col gap-8 sm:gap-12">
          <Box horizontal className="justify-between gap-x-6 gap-y-2 flex-wrap">
            <LocalTime timezone={timezone} />
            <div>
              <div className="text-primary-sub-header ">
                {`${t(lng.updatedAt)} ${convertTime(
                  weather.updatedAt - TIMEZONE_OFFSET
                )}`}
              </div>
              <TemperatureRange min={weather.tempMin} max={weather.tempMax} />
            </div>
          </Box>

          <Box className="overflow-hidden">
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-x-2 items-center justify-items-center">
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
              <div className="text-center self-start overflow-hidden text-ellipsis">
                {weather.description}
              </div>
            </div>
          </Box>
          <TemperatureChart weather={weather.extended} />

          <Box title={t(lng.currentDetails)}>
            <WeatherDetails
              className="p-2 pt-4 sm:p-4"
              humidity={weather.humidity}
              pressure={weather.pressure}
              visibility={weather.visibility}
              sunrise={weather.sunrise + timezone}
              sunset={weather.sunset + timezone}
              wind={weather.wind}
            />
          </Box>
          <Box
            title={
              <div className="flex flex-wrap gap-x-4 items-center">
                <span>{t(lng.airQuality)}</span>
                <AirQualityLevel
                  level={PollutantLevels[weather.airPollution?.["aqi"] || 0]}
                />
              </div>
            }
          >
            <AirQuality
              className="p-2 pt-4 sm:p-4"
              data={weather.airPollution}
            />
          </Box>
        </div>
      )}
    </>
  );
}
