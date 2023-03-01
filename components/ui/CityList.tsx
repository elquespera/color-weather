import { lng } from "@/assets/translations";
import useTranslation from "@/hooks/useTranslation";
import clsx from "clsx";
import { City } from "types";
import Temperature from "../Temperature";
import Icon from "./Icon";
import IconButton from "./IconButton";
import ListItem from "./ListItem";
import WeatherIcon from "./WeatherIcon";

interface CityListProps {
  type: "current" | "search" | "favorites";
  cities: City[];
  isCityFavorite?: (latitude: number, longitude: number) => boolean;
  onClick?: (latitude: number, longitude: number) => void;
  onToggleFavorite?: (latitude: number, longitude: number) => void;
}

export default function CityList({
  type,
  cities,
  isCityFavorite,
  onClick,
  onToggleFavorite,
}: CityListProps) {
  const t = useTranslation();

  function handleCityClick(latitude: number, longitude: number) {
    if (onClick) onClick(latitude, longitude);
  }

  function toggleFavoriteCity(latitude: number, longitude: number) {
    if (onToggleFavorite) onToggleFavorite(latitude, longitude);
  }

  return (
    <ul>
      {cities.map(({ name, country, lat, lon, weather }, index) => (
        <ListItem
          key={index}
          primary={name}
          secondary={type === "current" ? t(lng.yourLocation) : country}
          startDecoration={
            <Icon
              type={
                type === "current"
                  ? "near"
                  : type === "search"
                  ? "location"
                  : "star-filled"
              }
              className={clsx(
                type === "current"
                  ? "text-primary-header"
                  : type === "favorites"
                  ? "text-yellow-500"
                  : "text-text-secondary"
              )}
            />
          }
          middleDecoration={
            weather && (
              <div className="flex items-center">
                <Temperature
                  value={weather.temp}
                  className="text-primary-sub-header text-xl sm:text-2xl"
                />
                <WeatherIcon icon={weather.icon} alt={weather.description} />
              </div>
            )
          }
          endDecoration={
            type !== "current" && (
              <IconButton
                className={clsx(
                  type === "favorites"
                    ? "text-text-secondary"
                    : "text-yellow-500"
                )}
                icon={
                  type === "favorites"
                    ? "close"
                    : isCityFavorite && isCityFavorite(lat, lon)
                    ? "star-filled"
                    : "star"
                }
                onClick={() => toggleFavoriteCity(lat, lon)}
              />
            )
          }
          ignoreEndDecorationClick
          hover
          onClick={() => handleCityClick(lat, lon)}
        />
      ))}
    </ul>
  );
}
