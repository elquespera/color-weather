import {
  AppLanguage,
  City,
  CurrentWeatherResponse,
  MeasurementUnits,
} from "types";

const APP_API_ROUTE = "/api/";

export async function fetchData(
  base: "open-weather" | "open-weather-geo" | "big-data-cloud" | "app",
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
      : base === "big-data-cloud"
      ? process.env.BIG_DATA_CLOUD_URL
      : APP_API_ROUTE) || "";

  const params = new URLSearchParams({});

  if (base === "open-weather" || base === "open-weather-geo") {
    const appid = process.env.OPEN_WEATHER_KEY || "";
    params.append("appid", appid);
  }

  if (base === "big-data-cloud") {
    const key = process.env.BIG_DATA_CLOUD_KEY || "";
    console.log(key);
    params.append("key", key);
  }

  Object.entries(query).forEach(([key, value]) => {
    if (typeof value === "string" || typeof value === "number") {
      const actualValue =
        key === "lang" &&
        value === "cs" &&
        (base === "open-weather" || base === "open-weather-geo")
          ? "cz"
          : String(value);
      params.append(key, actualValue);
    }
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
