import type { NextApiRequest, NextApiResponse } from "next";
import fetchData from "lib/fetchData";
import { City, ErrorResponse } from "types";
import { OpenWeatherGeoResponse } from "types/openWeatherMap";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<City | ErrorResponse>
) {
  const lang = typeof req.query.lang === "string" ? req.query.lang : "en";

  const response = await fetchData("open-weather-geo", "reverse", {
    ...req.query,
    limit: 1,
  });
  if (!response)
    return {
      status: 500,
      message: "Server Error",
    };
  const data: OpenWeatherGeoResponse = await response.json();
  const city = data[0];

  if (response.ok && city) {
    let cityName = city.name;
    if (city.local_names && city.local_names[lang]) {
      cityName = city.local_names[lang];
    }

    const responseData: City = {
      name: cityName,
      lat: city.lat,
      lon: city.lon,
      country: city.country,
    };

    res.status(200).json(responseData);
  } else {
    res.status(response.status).json({
      state: "error",
      status: response.status,
      message: "Failed to fetch city data",
    });
  }
}
