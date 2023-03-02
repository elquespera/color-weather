import { useContext } from "react";
import Temperature from "components/Temperature";
import WeatherIcon from "components/ui/WeatherIcon";
import TemperatureRange from "components/TemperatureRange";
import useConvertDate from "hooks/useConvertDate";
import LocationContext from "context/LocationContext";
import TemperatureChart from "@/components/TemperatureChart";
import Box from "@/components/ui/Box";
import useTranslation from "@/hooks/useTranslation";
import { lng } from "@/assets/translations";
import AppContext from "@/context/AppContext";

export default function Home() {
  const t = useTranslation();
  const [convertDate, , convertTime] = useConvertDate();
  const { units } = useContext(AppContext);
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

          <div className="w-full-mobile self-center">
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
          <TemperatureChart weather={weather.extended} />

          <Box title={t(lng.currentDetails)}>
            <div className="grid grid-cols-[auto,1fr] gap-x-8 sm:gap-x-12 gap-y-1 grid-col p-2 pt-4 sm:p-4 text-sm sm:text-base">
              <span className="text-text-secondary">{t(lng.humidity)}</span>
              <span>{weather.humidity}%</span>
              <span className="text-text-secondary">{t(lng.pressure)}</span>
              <span>
                {weather.pressure} {t(lng.mBar)}
              </span>
              <span className="text-text-secondary">{t(lng.visibility)}</span>
              <span>
                {Math.round(weather.visibility * 100) / 100000} {t(lng.km)}
              </span>
              <span className="text-text-secondary">
                {t(lng.sunriseSunset)}
              </span>
              <span>
                {convertTime(weather.sunrise)}, {convertTime(weather.sunset)}
              </span>
              <span className="text-text-secondary">{t(lng.dayLength)}</span>
              <span>{convertTime(weather.sunset - weather.sunrise)}</span>
              <span className="text-text-secondary">{t(lng.wind)}</span>
              <span>{`${Math.round(weather.wind.speed)} ${t(
                units === "imperial" ? lng.mph : lng.mSec
              )}`}</span>
            </div>
          </Box>
        </div>
      )}
    </>
  );
}
