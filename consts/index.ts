import { lng } from "assets/translations";
import {
  AppLanguage,
  MeasurementUnits,
  PollutantLevel,
  RouteInfo,
} from "types";

export const APP_TITLE = "ColorWeather";
export const APP_DESCRIPTION = "ColorWeather - cool and colorful weather app";

export const ROUTES: RouteInfo[] = [
  { route: "/", title: lng.currentTab, icon: "partly-cloudy" },
  { route: "/5-days", title: lng.fiveDaysTab, icon: "calendar-sunny" },
  { route: "/settings", title: lng.settingsTab, icon: "settings" },
];

export const DEFAULT_UNITS: MeasurementUnits = "metric";

export const DEFAULT_APP_LANGUAGE: AppLanguage = "en";

export const DEFAULT_LOCATION = [50.0755, 14.4378] as const;

export const MAX_FAVORITES = 10;

export const TIMEZONE_OFFSET = new Date().getTimezoneOffset() * 60 * 1000;

export const POLLUTION_LEVELS: { [key in PollutantLevel]: number } = {
  "very-poor": 0,
  poor: 1,
  moderate: 2,
  fair: 3,
  good: 4,
};

export const POLLUTION_LEVEL_TRANSLATIONS: { [key in PollutantLevel]: lng } = {
  good: lng.good,
  fair: lng.fair,
  moderate: lng.moderate,
  poor: lng.poor,
  "very-poor": lng.veryPoor,
};
