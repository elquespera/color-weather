export default async function fetchData(
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
