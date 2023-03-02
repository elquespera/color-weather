import useConvertDate from "@/hooks/useConvertDate";
import { useEffect, useState } from "react";
import { WeatherDataPoint } from "types";
import { getWeatherIconURL } from "./ui/WeatherIcon";

interface TemperatureChartProps {
  maxPoints?: number | "all";
  weather?: WeatherDataPoint[];
}

const INCREMENT = 50;

export default function TemperatureChart({
  weather,
  maxPoints = 8,
}: TemperatureChartProps) {
  const [, , convertTime] = useConvertDate();

  const length = maxPoints === "all" ? weather?.length || 0 : maxPoints;
  const data = weather?.slice(0, length) || [];
  const viewBox = { w: length * INCREMENT, h: INCREMENT * 3 };
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

  function convertPoints(points: Array<{ x: number; y: number }>): string {
    return points.map(({ x, y }) => `${x},${y}`).join(" ");
  }

  return (
    weather && (
      <div className="mt-8">
        <svg viewBox={`0 0 ${viewBox.w} ${viewBox.h}`}>
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
                className="fill-primary-sub-header"
              >{`${Math.round(temp)}°`}</text>
            );
          })}
          {data.map(({ icon }, index) => {
            const x = (points[index + 1].x || 0) - INCREMENT * 0.3;
            const size = INCREMENT * 0.7;
            return (
              <image
                key={index}
                width={size}
                height={size}
                href={getWeatherIconURL(icon)}
                x={x}
                y={viewBox.h - INCREMENT * 0.9}
              />
            );
          })}
          {data.map(({ dt }, index) => {
            const x = (points[index + 1].x || 0) - INCREMENT * 0.2;
            return (
              <text
                key={index}
                x={x}
                y={viewBox.h - INCREMENT * 0.1}
                className="fill-text-secondary text-[0.6em]"
              >
                {convertTime(dt)}
              </text>
            );
          })}
        </svg>
      </div>
    )
  );
}
