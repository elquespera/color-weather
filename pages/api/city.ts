import type { NextApiRequest, NextApiResponse } from "next";
import { City, ErrorResponse } from "types";
import { OpenWeatherGeoResponse } from "types/openWeatherMap";
import { fetchData } from "lib/fetchData";
import findCountryName from "lib/findCountryName";
import convertLanguageCode from "@/lib/convertLanguageCode";
import findCityLocalName from "@/lib/findCityLocalName";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<City | ErrorResponse>
) {
  const lang = convertLanguageCode(req);
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
    const responseData: City = {
      name: findCityLocalName(city, lang),
      lat: city.lat,
      lon: city.lon,
      countryCode: city.country,
      country: findCountryName(city.country, lang),
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
