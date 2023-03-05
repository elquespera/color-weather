import { GPSCoordinates } from "types";

export default async function getApproximateLocation(): Promise<
  GPSCoordinates | undefined
> {
  try {
    const response = await fetch("/api/approximate", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const location: GPSCoordinates = await response.json();
      if (location) {
        return location;
      }
    }
  } catch {
    return undefined;
  }

  return undefined;
}
