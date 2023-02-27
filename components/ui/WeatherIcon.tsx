interface WeatherIconProps {
  icon: string;
  alt: string;
  large?: boolean;
}

export default function WeatherIcon({ icon, alt, large }: WeatherIconProps) {
  const size = large ? 100 : 50;
  return (
    <img
      // className="object-cover"
      alt={alt}
      width={size}
      height={size}
      src={`https://openweathermap.org/img/wn/${icon}@${large ? 4 : 2}x.png`}
    />
  );
}
