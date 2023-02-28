import { AppLanguage, MeasurementUnits, RouteInfo } from "@/types";

export const APP_TITLE = "ColorWeather";
export const APP_DESCRIPTION = "ColorWeather - cool and colorful weather app";

export const ROUTES: RouteInfo[] = [
  { route: "/", title: "Current", icon: "partly-cloudy" },
  { route: "/5-days", title: "5 Days", icon: "calendar-sunny" },
  { route: "/settings", title: "Settings", icon: "settings" },
];

export const DEFAULT_UNITS: MeasurementUnits = "metric";

export const DEFAULT_APP_LANGUAGE: AppLanguage = "en";
