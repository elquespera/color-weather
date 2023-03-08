export default function capitalizeStr(str?: string): string {
  if (str && str.length > 0) {
    return str[0].toLocaleUpperCase() + str.slice(1);
  }
  return "";
}
