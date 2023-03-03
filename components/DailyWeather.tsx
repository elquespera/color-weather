import useTranslation from "hooks/useTranslation";
import useConvertDate from "hooks/useConvertDate";
import { WeatherDataPoint } from "types";
import Temperature from "./Temperature";
import ListItem from "./ui/ListItem";
import WeatherDetails from "./WeatherDetails";
import WeatherIcon from "./ui/WeatherIcon";

interface DailyWeatherProps {
  weather?: WeatherDataPoint[];
}

export default function DailyWeather({ weather }: DailyWeatherProps) {
  const t = useTranslation();
  const [, convertDate, convertTime] = useConvertDate();
  const currentWeather = weather?.[0];

  return (
    <ListItem
      hover
      primary={convertDate(currentWeather?.dt)}
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
              visibility={currentWeather.visibility}
              wind={currentWeather.wind}
            />
          </div>
        )
      }
    />
  );
}
