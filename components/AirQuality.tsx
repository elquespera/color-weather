import clsx from "clsx";
import { PollutionComponents } from "types";
import AirQualityItem from "./AirQualityItem";

interface AirQualityProps {
  data?: PollutionComponents;
  className?: string;
}

const pollutants = ["pm2_5", "pm10", "so2", "no2", "co"];

export default function AirQuality({ data, className }: AirQualityProps) {
  return (
    <div className={clsx("flex flex-col", className)}>
      <table className="text-sm sm:text-base">
        <thead>
          <tr className="text-text-secondary italic border-spacing-6">
            <th className="text-start">Pollutant</th>
            <th className="text-start">Level</th>
            <th className="text-start">Concentration</th>
          </tr>
        </thead>
        <tbody>
          {pollutants.map((pollutant) => {
            return data?.[pollutant] ? (
              <AirQualityItem
                key={pollutant}
                name={pollutant}
                value={data?.[pollutant]}
              />
            ) : null;
          })}
        </tbody>
      </table>
    </div>
  );
}
