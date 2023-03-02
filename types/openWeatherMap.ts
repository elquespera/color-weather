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
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain?: {
    "1h": number;
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
}

interface OpenWeatherCity {
  name: string;
  lat: number;
  lon: number;
  country: string;
  local_names: { [key: string]: string };
}

export type OpenWeatherGeoResponse = OpenWeatherCity[];
