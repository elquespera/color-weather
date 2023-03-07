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
    let responseData: CitySearchResponse = data.map((city) => {
      return {
        name: findCityLocalName(city, lang),
        lat: city.lat,
        lon: city.lon,
        countryCode: city.country,
        country: findCountryName(city.country, lang),
      };
    });

    responseData = responseData.filter((city, index) => {
      const foundIndex = responseData.findIndex(
        ({ lat, lon, name, countryCode }) => {
          return (
            city.name === name &&
            city.countryCode === countryCode &&
            Math.round(city.lat) === Math.round(lat) &&
            Math.round(city.lon) === Math.round(lon)
          );
        }
      );
      return index === foundIndex;
    });

    res.status(200).json(responseData);
  } else {
    res.status(response.status).json({
      status: response.status,
      message: "Failed to fetch city data",
    });
  }
}
