export interface ErrorResponse {
  state: "error";
  status: number;
  message: string;
}

export interface CurrentWeatherResponse {
  state: "ok";
  temp: number;
  tempFeelsLike: number;
  description: string;
  city: string;
}
