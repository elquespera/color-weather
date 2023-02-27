export interface ErrorResponse {
  state: "error";
  status: number;
  message: string;
}

export interface CurrentWeatherResponse {
  state: "ok";
  temp: number;
  tempFeelsLike: number;
  description: string;
  city: string;
  icon: string;
}

const Icons = ["settings", "theme", "sunny", "calendar-sunny"] as const;

export type IconType = typeof Icons[number];

export type RouteInfo = { route: string; title: string; icon: IconType };

export type MeasurementUnits = "metric" | "imperial";
