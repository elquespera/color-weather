import { fetchData } from "lib/fetchData";
import { CitySearchResponse, ErrorResponse } from "types";
import { OpenWeatherGeoResponse } from "types/openWeatherMap";
import type { NextApiRequest, NextApiResponse } from "next";
import findCountryName from "@/lib/findCountryName";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CitySearchResponse | ErrorResponse>
) {
  const lang = typeof req.query.lang === "string" ? req.query.lang : "en";

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
    const responseData: CitySearchResponse = data.map(
      ({ name, lat, lon, country, local_names }) => {
        let cityName = name;
        if (local_names && local_names[lang]) cityName = local_names[lang];
        return {
          name: cityName,
          lat,
          lon,
          countryCode: country,
          country: findCountryName(country, lang),
        };
      }
    );

    res.status(200).json(responseData);
  } else {
    res.status(response.status).json({
      state: "error",
      status: response.status,
      message: "Failed to fetch city data",
    });
  }
}
