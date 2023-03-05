import { fetchData } from "lib/fetchData";
import { ErrorResponse, PollutionComponents } from "types";
import { OpenWeatherAirPollutionResponse } from "types/openWeatherMap";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PollutionComponents | ErrorResponse>
) {
  const response = await fetchData("open-weather", "air_pollution", {
    ...req.query,
  });

  if (!response)
    return {
      status: 500,
      message: "Server Error",
    };

  const data: OpenWeatherAirPollutionResponse = await response.json();

  if (response.ok && data?.list[0].components) {
    res.status(200).json(data.list[0].components);
  } else {
    res.status(response.status).json({
      state: "error",
      status: response.status,
      message: "Failed to fetch air pollution data",
    });
  }
}
