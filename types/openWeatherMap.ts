import { PollutionComponents } from "types";

export interface OpenWeatherCurrentResponse {
  dt: number;
  timezone: number;
  cod: number;
  message: string;

  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  pop: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain?: {
    "1h": number;
    "3h": number;
  };

  show?: {
    "1h": number;
    "3h": number;
  };

  clouds?: {
    all: number;
  };
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
}

export interface OpenWeather5DaysResponse {
  cod: number;
  message: string;
  list: OpenWeatherCurrentResponse[];
  city?: {
    sunrise: number;
    sunset: number;
  };
}

export interface OpenWeatherCity {
  name: string;
  country: string;
  lat: number;
  lon: number;
  local_names: { [key: string]: string };
}

export type OpenWeatherGeoResponse = OpenWeatherCity[];

export interface BigDataCloudGeoResponse {
  city: string;
  locality: string;
  countryCode: string;
  countryName: string;
}

interface OpenWeatherAirPollution {
  components: PollutionComponents;
  dt: number;
  main: {
    aqi: number;
  };
}

export interface OpenWeatherAirPollutionResponse {
  list: OpenWeatherAirPollution[];
}
