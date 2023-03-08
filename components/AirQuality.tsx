import { lng } from "@/assets/translations";
import useTranslation from "@/hooks/useTranslation";
import clsx from "clsx";
import { PollutionComponents } from "types";
import AirQualityItem from "./AirQualityItem";

interface AirQualityProps {
  data?: PollutionComponents;
  className?: string;
}

const pollutants = ["pm2_5", "pm10", "so2", "no2", "co"];

export default function AirQuality({ data, className }: AirQualityProps) {
  const t = useTranslation();

  return (
    <div className={clsx("flex flex-col overflow-auto", className)}>
      <table className="padded-table text-sm sm:text-base">
        <thead>
          <tr className="text-text-secondary">
            <th className="text-start font-light">{t(lng.pollutant)}</th>
            <th className="text-start font-light">{t(lng.level)}</th>
            <th className="text-start font-light hidden sm:flex gap-1">
              {t(lng.concentration)}
            </th>
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
