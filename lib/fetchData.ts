import {
  AppLanguage,
  City,
  CurrentWeatherResponse,
  MeasurementUnits,
} from "@/types";

export async function fetchData(
  base: "open-weather" | "open-weather-geo" | "app",
  segment: string,
  query: Partial<{
    [key: string]: string | number | string[];
  }>
): Promise<Response> {
  const baseUrl =
    (base === "open-weather"
      ? process.env.OPEN_WEATHER_URL
      : base === "open-weather-geo"
      ? process.env.OPEN_WEATHER_GEO_URL
      : "/api/") || "";

  const params = new URLSearchParams({});
  if (base !== "app") {
    const appid = process.env.OPEN_WEATHER_KEY || "";
    params.append("appid", appid);
  }

  Object.entries(query).forEach((entry) => {
    if (typeof entry[1] === "string" || typeof entry[1] === "number")
      params.append(entry[0], String(entry[1]));
  });

  const url = `${baseUrl}${segment}?${params.toString()}`;

  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function fetchCityData(
  lat: number,
  lon: number,
  lang: AppLanguage
) {
  const response = await fetchData("app", "city", { lang, lat, lon });
  if (response.ok) {
    const city: City = await response.json();
    return city;
  } else {
    return undefined;
  }
}

export async function fetchWeatherData(
  lat: number,
  lon: number,
  units: MeasurementUnits,
  lang: AppLanguage
) {
  const response = await fetchData("app", "weather", {
    lon,
    lat,
    units,
    lang,
  });

  if (response.ok) {
    const data: CurrentWeatherResponse = await response.json();
    return data;
  } else {
    return undefined;
  }
}

export async function fetchCityAndWeatherData(
  lat: number,
  lon: number,
  lang: AppLanguage,
  units: MeasurementUnits
) {
  const [cityResults, weatherResults] = await Promise.allSettled([
    fetchCityData(lat, lon, lang),
    fetchWeatherData(lat, lon, units, lang),
  ]);

  const city =
    cityResults.status === "fulfilled" ? cityResults.value : undefined;

  if (city && weatherResults.status === "fulfilled")
    city.weather = weatherResults.value;

  return city;
}
