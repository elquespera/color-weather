import { lng } from "assets/translations";

export interface ErrorResponse {
  state: "error";
  status: number;
  message: string;
}

export interface WindData {
  speed: number;
  deg: number;
  gust: number;
}

export interface WeatherDataPoint {
  dt: number;
  temp: number;
  description: string;
  pressure: number;
  humidity: number;
  icon: string;
  visibility: number;
  wind: WindData;
}

export interface CurrentWeatherResponse {
  state: "ok";
  temp: number;
  tempFeelsLike: number;
  tempMin: number;
  tempMax: number;
  description: string;
  pressure: number;
  humidity: number;
  visibility: number;
  icon: string;
  updatedAt: number;
  extended: WeatherDataPoint[];
}

export interface City {
  lat: number;
  lon: number;
  name?: string;
  country?: string;
  weather?: CurrentWeatherResponse;
}

export type CitySearchResponse = City[];

const Icons = [
  "settings",
  "theme",
  "sunny",
  "moon",
  "calendar-sunny",
  "partly-cloudy",
  "search",
  "back",
  "close",
  "location",
  "near",
  "star",
  "star-filled",
] as const;

export type IconType = typeof Icons[number];

export type IconSize = "small" | "medium" | "large";

export type RouteInfo = { route: string; title: lng; icon: IconType };

export type MeasurementUnits = "metric" | "imperial";

export const APP_LANGUAGES = ["en", "ru", "es"] as const;

export type AppLanguage = typeof APP_LANGUAGES[number];

export const APP_LANGUAGES_META: {
  [key in AppLanguage]: { name: string };
} = {
  en: { name: "English" },
  ru: { name: "Русский" },
  es: { name: "Español" },
};
