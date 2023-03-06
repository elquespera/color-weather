import { useEffect, useState } from "react";
import useConvertDate from "hooks/useConvertDate";
import { WeatherDataPoint } from "types";
import Temperature from "./Temperature";
import ListItem from "./ui/ListItem";
import WeatherDetails from "./WeatherDetails";
import WeatherIcon from "./ui/WeatherIcon";
interface DailyWeatherProps {
  weather?: WeatherDataPoint[];
}

const MIN_MIDDAY_HOUR = 11;
const MAX_MIDDAY_HOUR = 14;

export default function DailyWeather({ weather }: DailyWeatherProps) {
  const [, convertDate, convertTime] = useConvertDate();
  const [currentWeather, setCurrentWeather] = useState<WeatherDataPoint>();
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const initialDate = new Date(weather?.[0]?.dt || 0).getUTCDate();
    const temps =
      weather
        ?.filter(({ dt }) => new Date(dt).getUTCDate() === initialDate)
        .map(({ temp }) => temp) || [];

    setMinTemp(Math.round(Math.min(...temps)));
    setMaxTemp(Math.round(Math.max(...temps)));

    setCurrentWeather(
      weather?.find(({ dt }) => {
        const date = new Date(dt).getUTCDate();
        const hours = new Date(dt).getUTCHours();
        return (
          date === initialDate &&
          hours > MIN_MIDDAY_HOUR &&
          hours <= MAX_MIDDAY_HOUR
        );
      }) || weather?.[0]
    );

    setExpanded(false);
  }, [weather]);

  return (
    <ListItem
      hover
      expanded={expanded}
      primary={convertDate(currentWeather?.dt || 0, true)}
      secondary={currentWeather?.description}
      endDecoration={
        currentWeather && (
          <div className="flex items-center">
            <Temperature value={maxTemp} />
            {minTemp !== maxTemp && (
              <>
                <span className="hidden sm:inline-block pl-2">/</span>
                <span className="hidden sm:inline-block pl-2">
                  <Temperature value={minTemp} />
                </span>
              </>
            )}
            <WeatherIcon
              icon={currentWeather.icon}
              alt={currentWeather.description}
            />
          </div>
        )
      }
      collapsedElement={
        currentWeather && (
          <div className="flex flex-col pb-6 gap-2 sm:gap-4 px-2 sm:px-4 sm:pb-4 border-b-[1px] border-divider">
            <WeatherDetails
              className="text-sm sm:text-sm"
              pressure={currentWeather.pressure}
              humidity={currentWeather.humidity}
              wind={currentWeather.wind}
            />
            <ul className="flex items-end gap-1 overflow-x-auto text-sm text-text-secondary mt-2 isolate">
              {weather?.map(
                ({ dt, icon, description, temp, precipitation }) => {
                  const chance = Math.round(precipitation?.probability * 100);
                  return (
                    <li
                      key={dt}
                      className="flex flex-col items-center shrink-0"
                    >
                      {chance !== 0 && (
                        <span className="translate-x-2 font-light text-blue-500">{`${chance}%`}</span>
                      )}
                      <Temperature
                        value={temp}
                        className="z-10 translate-y-1 translate-x-1"
                      />
                      <WeatherIcon icon={icon} alt={description} />
                      <span className="z-10 translate-y--1">
                        {convertTime(dt)}
                      </span>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        )
      }
      onClick={() => setExpanded(!expanded)}
    />
  );
}
