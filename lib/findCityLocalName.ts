import { OpenWeatherCity } from "types/openWeatherMap";

export default function findCityLocalName(
  city: OpenWeatherCity,
  language: string
) {
  let name = city.name;
  const lang = language === "cz" ? "cs" : language;
  if (city.local_names && city.local_names[lang]) {
    name = city.local_names[lang];
  }
  return name;
}
