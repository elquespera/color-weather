import { fetchData } from "lib/fetchData";
import { CurrentWeatherResponse, ErrorResponse, WeatherDataPoint } from "types";
import {
  OpenWeatherCurrentResponse,
  OpenWeather5DaysResponse,
} from "types/openWeatherMap";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CurrentWeatherResponse | ErrorResponse>
) {
  const responseCurrent = await fetchData("open-weather", "weather", req.query);

  if (!responseCurrent)
    return {
      status: 500,
      message: "Server Error",
    };
  let data5Days: OpenWeather5DaysResponse | undefined;
  try {
    const response5Days = await fetchData(
      "open-weather",
      "forecast",
      req.query
    );
    if (response5Days) data5Days = await response5Days.json();
  } catch {
    data5Days = undefined;
  }

  const data: OpenWeatherCurrentResponse = await responseCurrent.json();

  if (responseCurrent.ok) {
    const responseData = convertWeatherData(data);
    responseData.extended = convertWeatherDataPoints(data5Days);
    res.status(200).json(responseData);
  } else {
    res.status(responseCurrent.status).json({
      state: "error",
      status: responseCurrent.status,
      message: data.message,
    });
  }
}

function capitalize(str?: string): string {
  if (str && str.length > 0) {
    return str[0].toLocaleUpperCase() + str.slice(1);
  } else return "";
}

function convertWeatherData(
  data: OpenWeatherCurrentResponse
): CurrentWeatherResponse {
  const description = capitalize(data.weather[0].description);
  return {
    state: "ok",
    temp: data.main.temp,
    tempFeelsLike: data.main.feels_like,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
    description,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    visibility: data.visibility,
    wind: data.wind,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    icon: data.weather[0].icon,
    updatedAt: data.dt,
    extended: [],
  };
}

function convertWeatherDataPoints(
  data?: OpenWeather5DaysResponse
): WeatherDataPoint[] {
  if (!data?.list) return [];

  return data.list.map<WeatherDataPoint>((entry) => {
    const description = capitalize(entry.weather[0].description);
    return {
      dt: entry.dt,
      temp: entry.main.temp,
      description,
      humidity: entry.main.humidity,
      pressure: entry.main.pressure,
      visibility: entry.visibility,
      icon: entry.weather[0].icon,
      wind: entry.wind,
    };
  });
}
