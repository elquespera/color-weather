import { lng } from "assets/translations";

export interface ErrorResponse {
  state: "error";
  status: number;
  message: string;
}

export interface CurrentWeatherResponse {
  state: "ok";
  temp: number;
  tempFeelsLike: number;
  tempMin: number;
  tempMax: number;
  description: string;
  city: string;
  icon: string;
  updatedAt: number;
}

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
