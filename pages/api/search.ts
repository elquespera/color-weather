import { fetchData } from "lib/fetchData";
import { CitySearchResponse, ErrorResponse } from "types";
import { OpenWeatherGeoResponse } from "types/openWeatherMap";
import type { NextApiRequest, NextApiResponse } from "next";
import findCountryName from "@/lib/findCountryName";
import convertLanguageCode from "@/lib/convertLanguageCode";
import findCityLocalName from "@/lib/findCityLocalName";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CitySearchResponse | ErrorResponse>
) {
  const lang = convertLanguageCode(req);

  const response = await fetchData("open-weather-geo", "direct", {
    ...req.query,
    limit: 5,
  });
  if (!response)
    return {
      status: 500,
      message: "Server Error",
    };
  const data: OpenWeatherGeoResponse = await response.json();

  if (response.ok) {
    const responseData: CitySearchResponse = data.map((city) => {
      return {
        name: findCityLocalName(city, lang),
        lat: city.lat,
        lon: city.lon,
        countryCode: city.country,
        country: findCountryName(city.country, lang),
      };
    });

    res.status(200).json(responseData);
  } else {
    res.status(response.status).json({
      state: "error",
      status: response.status,
      message: "Failed to fetch city data",
    });
  }
}
