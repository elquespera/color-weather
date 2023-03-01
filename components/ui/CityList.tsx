import clsx from "clsx";
import { City } from "types";
import Icon from "./Icon";
import IconButton from "./IconButton";
import ListItem from "./ListItem";

interface CityListProps {
  type: "search" | "favorites";
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
  function handleCityClick(latitude: number, longitude: number) {
    if (onClick) onClick(latitude, longitude);
  }

  function toggleFavoriteCity(latitude: number, longitude: number) {
    if (onToggleFavorite) onToggleFavorite(latitude, longitude);
  }

  return (
    <ul>
      {cities.map(({ name, country, lat, lon }, index) => (
        <ListItem
          key={index}
          primary={`${name}, ${country}`}
          secondary={`${lat} ${lon}`}
          startDecoration={
            <Icon
              type={type === "search" ? "location" : "star-filled"}
              className="text-text-secondary"
            />
          }
          endDecoration={
            <IconButton
              icon={
                type === "favorites"
                  ? "close"
                  : isCityFavorite && isCityFavorite(lat, lon)
                  ? "star-filled"
                  : "star"
              }
              onClick={() => toggleFavoriteCity(lat, lon)}
            />
          }
          ignoreEndDecorationClick
          hover
          onClick={() => handleCityClick(lat, lon)}
        />
      ))}
    </ul>
  );
}
