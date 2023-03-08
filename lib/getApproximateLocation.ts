import { GPSCoordinates } from "types";

const GEOLOCATION_DB_URL = "https://geolocation-db.com/json/";

export default async function getApproximateLocation(): Promise<
  GPSCoordinates | undefined
> {
  try {
    const response = await fetch(GEOLOCATION_DB_URL);

    if (response.ok) {
      const location: { longitude: number; latitude: number } =
        await response.json();
      if (location) {
        return { lat: location.latitude, lon: location.longitude };
      }
    }
  } catch {
    return undefined;
  }

  return undefined;
}
