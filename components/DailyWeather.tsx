// import useTranslation from "hooks/useTranslation";
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

  const initialDate = new Date(weather?.[0].dt || 0).getUTCDate();

  let currentWeather =
    weather?.find(({ dt }) => {
      const date = new Date(dt).getUTCDate();
      const hours = new Date(dt).getUTCHours();
      return (
        date === initialDate &&
        hours > MIN_MIDDAY_HOUR &&
        hours <= MAX_MIDDAY_HOUR
      );
    }) || weather?.[0];

  return (
    <ListItem
      hover
      primary={convertDate(currentWeather?.dt || 0, true)}
      secondary={currentWeather?.description}
      endDecoration={
        currentWeather && (
          <div className="flex items-center">
            <Temperature value={currentWeather.temp} />
            <WeatherIcon
              icon={currentWeather.icon}
              alt={currentWeather.description}
            />
          </div>
        )
      }
      collapsedElement={
        currentWeather && (
          <div className="flex flex-col">
            <WeatherDetails
              pressure={currentWeather.pressure}
              humidity={currentWeather.humidity}
              wind={currentWeather.wind}
            />
            <ul className="flex gap-1 overflow-x-auto text-sm text-text-secondary mt-2 isolate">
              {weather?.map(({ dt, icon, description, temp }) => (
                <li key={dt} className="flex flex-col items-center shrink-0">
                  <Temperature
                    value={temp}
                    className="z-10 translate-y-1 translate-x-1"
                  />
                  <WeatherIcon icon={icon} alt={description} />
                  <span className="z-10 translate-y--1">{convertTime(dt)}</span>
                </li>
              ))}
            </ul>
          </div>
        )
      }
    />
  );
}
