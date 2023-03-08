import { AppLanguage, CitySearchResponse } from "types";
import { fetchData } from "./fetchData";

export default function searchCities() {
  const cache = new Map<string, CitySearchResponse>();

  return async (q: string, lang: AppLanguage): Promise<CitySearchResponse> => {
    if (q === "") return [];
    const request = { lang, q: q.trim() };
    const key = JSON.stringify(request);
    if (cache.has(key)) return cache.get(key) || [];

    const response = await fetchData("app", "search", request);

    if (response.ok) {
      const data: CitySearchResponse = await response.json();
      cache.set(key, data);
      return data;
    } else {
      return [];
    }
  };
}
