interface WeatherIconProps {
  icon: string;
  alt: string;
  large?: boolean;
}

export default function WeatherIcon({ icon, alt, large }: WeatherIconProps) {
  const size = large ? 100 : 50;
  return (
    <img
      alt={alt}
      width={size}
      height={size}
      src={getWeatherIconURL(icon, large)}
    />
  );
}

export function getWeatherIconURL(icon: string, large = true): string {
  return `https://openweathermap.org/img/wn/${icon}@${large ? 4 : 2}x.png`;
}
