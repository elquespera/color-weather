export default async function fetchData(
  segment: string,
  query: Partial<{
    [key: string]: string | number | string[];
  }>,
  useOpenWeatherMap = false
): Promise<Response> {
  const baseUrl =
    (useOpenWeatherMap
      ? process.env.OPEN_WEATHER_URL
      : process.env.NEXT_PUBLIC_APP_API_URL) || "";

  const params = new URLSearchParams({});
  if (useOpenWeatherMap) {
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
