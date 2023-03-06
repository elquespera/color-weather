import { lng } from "assets/translations";

export interface ErrorResponse {
  status: number;
  message: string;
}

export interface WindData {
  speed: number;
  deg: number;
  gust: number;
}

export interface PrecipitationData {
  probability: number;
  volume: number;
}

export interface WeatherDataPoint {
  dt: number;
  temp: number;
  description: string;
  pressure: number;
  humidity: number;
  icon: string;
  visibility: number;
  precipitation: PrecipitationData;
  wind: WindData;
  sunrise?: number;
  sunset?: number;
}

export interface PollutionComponents {
  [key: string]: number;
}

export const PollutantLevels = [
  "good",
  "fair",
  "moderate",
  "poor",
  "very-poor",
] as const;

export type PollutantLevel = typeof PollutantLevels[number];

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
  wind: WindData;
  sunrise: number;
  sunset: number;
  icon: string;
  updatedAt: number;
  timezone: number;
  extended: WeatherDataPoint[];
  airPollution?: PollutionComponents;
}

export interface City {
  lat: number;
  lon: number;
  name?: string;
  country?: string;
  countryCode?: string;
  weather?: CurrentWeatherResponse;
}

export type CitySearchResponse = City[];

export type GPSCoordinates = { lat: number; lon: number };

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
  "location-off",
  "near",
  "star",
  "star-filled",
  "loading",
  "info",
  "wind",
] as const;

export type LocationState =
  | "not-requested"
  | "granted"
  | "denied"
  | "unavailable"
  | "timeout";

export type IconType = typeof Icons[number];

export type IconSize = "small" | "medium" | "large";

export type RouteInfo = { route: string; title: lng; icon: IconType };

export type MeasurementUnits = "metric" | "imperial";

export const APP_LANGUAGES = ["en", "de", "es", "ru", "cs"] as const;

export type AppLanguage = typeof APP_LANGUAGES[number];

export const APP_LANGUAGES_META: {
  [key in AppLanguage]: { name: string };
} = {
  en: { name: "English" },
  ru: { name: "Русский" },
  es: { name: "Español" },
  de: { name: "Deutsch" },
  cs: { name: "Čeština" },
};

export type AppState = "ready" | "fetching" | "error";

export interface Range<T> {
  range: [number, number];
  value: T;
}

export type RangeList<T> = Range<T>[];
