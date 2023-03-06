import type { NextApiRequest, NextApiResponse } from "next";
import { City, ErrorResponse } from "types";
import {
  BigDataCloudGeoResponse,
  OpenWeatherGeoResponse,
} from "types/openWeatherMap";
import { fetchData } from "lib/fetchData";
import findCountryName from "lib/findCountryName";
import convertLanguageCode from "lib/convertLanguageCode";
import findCityLocalName from "lib/findCityLocalName";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<City | ErrorResponse>
) {
  const lang = convertLanguageCode(req);
  const lat = typeof req.query.lat === "string" ? Number(req.query.lat) : null;
  const lon = typeof req.query.lon === "string" ? Number(req.query.lon) : null;
  if (!lat || !lon) {
    res
      .status(400)
      .json({ status: 404, message: "No latitude or longitude was provided" });
    return;
  }

  //First try Big Data Cloud API

  const dataCloudResponse = await fetchData(
    "big-data-cloud",
    "reverse-geocode",
    {
      latitude: lat,
      longitude: lon,
      localityLanguage: lang,
    }
  );

  if (dataCloudResponse.ok) {
    const data: BigDataCloudGeoResponse = await dataCloudResponse.json();
    res.status(200).json({
      lat,
      lon,
      name: data.city,
      countryCode: data.countryCode,
      country: findCountryName(data.countryCode, lang),
    });
    return;
  }

  //Fallback to Open Weather Geocoding

  const openWeatherRespose = await fetchData("open-weather-geo", "reverse", {
    ...req.query,
    limit: 1,
  });

  const data: OpenWeatherGeoResponse = await openWeatherRespose.json();
  const city = data[0];

  if (openWeatherRespose.ok && city) {
    res.status(200).json({
      name: findCityLocalName(city, lang),
      lat,
      lon,
      countryCode: city.country,
      country: findCountryName(city.country, lang),
    });
    return;
  }

  res.status(500).json({
    status: 500,
    message: "Failed to fetch city data",
  });
}
