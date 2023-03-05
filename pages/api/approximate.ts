import type { NextApiRequest, NextApiResponse } from "next";
import { GPSCoordinates } from "types";

const GEOLOCATION_DB_URL = "https://geolocation-db.com/json/";

interface GeolocationDbResponse {
  latitude: number;
  longitude: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GPSCoordinates | undefined>
) {
  const response = await fetch(GEOLOCATION_DB_URL, {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const location: GeolocationDbResponse = await response.json();
    if (location.latitude && location.longitude) {
      res.status(200).json({ lat: location.latitude, lon: location.longitude });
    }
  } else {
    res.status(500);
  }
}
