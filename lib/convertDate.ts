export default function convertDate(dt: number): string {
  return new Date(dt * 1000).toLocaleString("en", {
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
