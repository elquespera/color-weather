import LocationContext from "context/LocationContext";
import useConvertDate from "hooks/useConvertDate";
import calculateMaxWeatherPoints from "lib/calculateMaxWeatherPoints";
import { useContext, useEffect, useState } from "react";
import { MaxWeatherPoints, WeatherDataPoint } from "types";
import { getWeatherIconURL } from "./ui/WeatherIcon";

interface TemperatureChartProps {
  maxPoints?: MaxWeatherPoints;
  weather?: WeatherDataPoint[];
}

interface Point {
  x: number;
  y: number;
}

const INCREMENT = 50;

export default function TemperatureChart({
  weather,
  maxPoints = "all",
}: TemperatureChartProps) {
  const { weather: currentWeather } = useContext(LocationContext);
  const [, , convertTime] = useConvertDate();
  const [points, setPoints] = useState<Point[]>([]);
  const length = calculateMaxWeatherPoints(weather, maxPoints);
  const data = weather?.slice(0, length) || [];
  const viewBox = { w: length * INCREMENT, h: INCREMENT * 3 };
  const timezone = currentWeather?.timezone || 0;

  useEffect(() => {
    const minTemp = Math.min(...data.map(({ temp }) => temp));
    const maxTemp = Math.max(...data.map(({ temp }) => temp));
    const tempRange = Math.abs(maxTemp - minTemp);

    const points = data.map(({ temp }, index) => {
      return {
        x: INCREMENT * 0.5 + index * INCREMENT,
        y: INCREMENT * 1.2 - ((temp - minTemp) / tempRange) * (INCREMENT * 0.7),
      };
    });
    if (points.length > 0) {
      points.unshift({ x: 0, y: points[0].y });
      points.push({ x: viewBox.w, y: points[points.length - 1].y });
    }
    setPoints(points);
  }, [weather, maxPoints]);

  return weather && points.length > 1 ? (
    <div className="w-full-mobile self-center">
      <svg viewBox={`0 0 ${viewBox.w} ${viewBox.h}`}>
        <filter id="text-shadow">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="0.5"
            floodColor="var(--color-background)"
          />
        </filter>
        <polyline
          className="stroke-primary-header fill-none"
          strokeWidth="2"
          strokeLinejoin="round"
          points={convertPoints(points)}
        />
        <polygon
          className="stroke-none fill-primary-400 opacity-20"
          fill="none"
          strokeWidth="1"
          strokeLinejoin="round"
          points={`${convertPoints([
            { x: 0, y: viewBox.h },
            ...points,
            { x: viewBox.w, y: viewBox.h },
          ])}`}
        />
        {data.map(({ temp }, index) => {
          const x = (points[index + 1].x || 0) - INCREMENT * 0.05;
          const y = (points[index + 1].y || 0) - INCREMENT * 0.15;
          return (
            <text
              key={index}
              x={x}
              y={y}
              filter="url(#text-shadow)"
              className="fill-primary-header"
            >{`${Math.round(temp)}°`}</text>
          );
        })}
        {data.map(({ icon }, index) => {
          const x = (points[index + 1].x || 0) - INCREMENT * 0.5;
          const size = INCREMENT;
          return (
            <image
              key={index}
              width={size}
              height={size}
              href={getWeatherIconURL(icon)}
              x={x}
              y={viewBox.h - INCREMENT * 1.3}
            />
          );
        })}
        {data.map(({ dt }, index) => {
          const x = (points[index + 1].x || 0) - INCREMENT * 0.3;
          return (
            <text
              key={index}
              x={x}
              y={viewBox.h - INCREMENT * 0.2}
              className="fill-text-secondary text-[0.8em]"
              filter="url(#text-shadow)"
            >
              {convertTime(dt + timezone)}
            </text>
          );
        })}
        {data.map(({ precipitation }, index) => {
          const x = (points[index + 1].x || 0) - INCREMENT * 0.1;
          const chance = Math.round(precipitation?.probability * 100);
          if (chance === 0) return null;
          return (
            <text
              key={index}
              x={x}
              y={viewBox.h - INCREMENT * 1.2}
              filter="url(#text-shadow)"
              className="fill-primary-sub-header text-[0.7em] opacity-85"
            >
              {`${chance}%`}
            </text>
          );
        })}
        <line
          x1={0}
          y1={viewBox.h}
          x2={viewBox.w}
          y2={viewBox.h}
          strokeWidth={1}
          className="stroke-primary-header"
        />
      </svg>
    </div>
  ) : null;
}

function convertPoints(points: Array<{ x: number; y: number }>): string {
  return points.map(({ x, y }) => `${x},${y}`).join(" ");
}
