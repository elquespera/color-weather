import { lng } from "@/assets/translations";
import { AppLanguage, MeasurementUnits, RouteInfo } from "@/types";

export const APP_TITLE = "ColorWeather";
export const APP_DESCRIPTION = "ColorWeather - cool and colorful weather app";

export const ROUTES: RouteInfo[] = [
  { route: "/", title: lng.currentTab, icon: "partly-cloudy" },
  { route: "/5-days", title: lng.fiveDaysTab, icon: "calendar-sunny" },
  { route: "/settings", title: lng.settingsTab, icon: "settings" },
];

export const DEFAULT_UNITS: MeasurementUnits = "metric";

export const DEFAULT_APP_LANGUAGE: AppLanguage = "en";

export const MAX_FAVORITES = 10;
