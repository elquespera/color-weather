import { MaxWeatherPoints, WeatherDataPoint } from "types";

export default function calculateMaxWeatherPoints(
  points: WeatherDataPoint[] | undefined,
  maxPoints: MaxWeatherPoints | undefined = "all"
) {
  return maxPoints === "all" ? points?.length || 0 : maxPoints;
}
