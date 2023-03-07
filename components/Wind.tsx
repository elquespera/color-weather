import { useContext } from "react";
import AppContext from "context/AppContext";
import clsx from "clsx";
import { MaxWeatherPoints, WeatherDataPoint, WindData } from "types";
import useTranslation from "hooks/useTranslation";
import { lng } from "assets/translations";
import WindIcon from "./WindIcon";
import WindDirection from "./WindDirection";
import WindStrength from "./WindStrength";
import calculateMaxWeatherPoints from "@/lib/calculateMaxWeatherPoints";
import LocationContext from "@/context/LocationContext";
import useConvertDate from "@/hooks/useConvertDate";

interface WindProps {
  data?: WindData;
  extended?: WeatherDataPoint[];
  maxPoints?: MaxWeatherPoints;
  className?: string;
}

export default function Wind({
  data,
  extended,
  className,
  maxPoints = "all",
}: WindProps) {
  const t = useTranslation();
  const { units: currentUnits } = useContext(AppContext);
  const { weather: currentWeather } = useContext(LocationContext);
  const [, , convertTime] = useConvertDate();
  const timezone = currentWeather?.timezone || 0;

  const extendedLength = calculateMaxWeatherPoints(extended, maxPoints);

  const units = t(currentUnits === "metric" ? lng.mSec : lng.mph);
  const speed = data ? Math.round(data.speed) : null;
  const gust =
    data && data.gust && Math.round(data.gust) !== speed
      ? Math.round(data.gust)
      : null;

  const windSpeeds =
    extended?.slice(0, extendedLength).map(({ wind }) => wind.speed) || [];
  const minSpeed = Math.min(...windSpeeds);
  const maxSpeed = Math.max(...windSpeeds);
  const speedDifference = maxSpeed - minSpeed;

  return data ? (
    <div className={clsx("flex flex-col gap-6 sm:gap-8", className)}>
      <div className="grid grid-cols-[auto,auto,1fr] gap-3 sm:gap-4 items-end">
        <div className="text-5xl sm:text-6xl text-primary-header">{speed}</div>
        <div className="flex flex-col text-text-secondary gap-1">
          <WindIcon degree={data.deg} />
          <div className="text-sm sm:text-base text-text-secondary">
            {units}
          </div>
        </div>
        <div className="flex flex-col">
          <WindStrength
            capitalize
            data={data}
            className="text-base sm:text-xl"
          />
          <WindDirection
            capitalize
            data={data}
            className="text-sm sm:text-base text-text-secondary"
          />
          {gust && (
            <div className="text-sm sm:text-base text-text-secondary">{`${t(
              lng.windGusts
            )}: ${Math.round(data.gust)} ${units}`}</div>
          )}
        </div>
      </div>
      {extended && (
        <ul className="flex gap-2 overflow-x-scroll">
          {extended.slice(0, extendedLength).map(({ wind, dt }, index) => {
            if (wind) {
              return (
                <li key={index} className="flex flex-col items-center">
                  <WindIcon
                    degree={wind.deg}
                    small
                    className="mb-auto text-text-secondary"
                  />

                  <div className="text-sm sm:text-base">
                    {Math.round(wind.speed)}
                  </div>
                  <div
                    className="w-5 sm:w-7 bg-primary-400"
                    style={{
                      height:
                        ((wind.speed - minSpeed) / speedDifference) * 20 +
                        minSpeed * 1.5 +
                        2,
                    }}
                  />
                  <div className="text-text-secondary text-[0.7em] sm:text-base pt-1 sm:pt-2">
                    {convertTime(dt + timezone)}
                  </div>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      )}
    </div>
  ) : null;
}
