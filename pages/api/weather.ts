import { fetchData } from "lib/fetchData";
import { CurrentWeatherResponse, ErrorResponse } from "types";
import { OpenWeatherCurrentResponse } from "types/openWeatherMap";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CurrentWeatherResponse | ErrorResponse>
) {
  const response = await fetchData("open-weather", "weather", req.query);
  if (!response)
    return {
      status: 500,
      message: "Server Error",
    };
  const data: OpenWeatherCurrentResponse = await response.json();

  if (response.ok) {
    const responseData: CurrentWeatherResponse = {
      state: "ok",
      temp: data.main.temp,
      tempFeelsLike: data.main.feels_like,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      description: data.weather[0].description,
      city: data.name,
      icon: data.weather[0].icon,
      updatedAt: data.dt,
    };
    res.status(200).json(responseData);
  } else {
    res
      .status(response.status)
      .json({ state: "error", status: response.status, message: data.message });
  }
}
