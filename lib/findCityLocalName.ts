import { OpenWeatherCity } from "types/openWeatherMap";

export default function findCityLocalName(city: OpenWeatherCity, lang: string) {
  if (city.local_names && city.local_names[lang]) {
    return city.local_names[lang];
  }
  return city.name;
}
