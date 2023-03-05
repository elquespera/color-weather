import { useContext, useEffect, useState } from "react";
import LocationContext from "context/LocationContext";
import { PollutantLevel } from "types";
import AirQualityLevel from "./AirQualityLevel";
import IconButton from "./ui/IconButton";
import clsx from "clsx";
import { lng } from "assets/translations";
import useTranslation from "@/hooks/useTranslation";

type PollutantInfo = {
  name: string;
  component?: React.ReactNode;
  levels: [number, number, number, number];
  description: lng;
};

const POLLUTANTS: { [key: string]: PollutantInfo } = {
  pm2_5: {
    name: "PM2.5",
    component: (
      <span>
        PM<sub>2.5</sub>
      </span>
    ),
    levels: [10, 25, 50, 75],
    description: lng.pm25Description,
  },
  pm10: {
    name: "PM10",
    component: (
      <span>
        PM<sub>10</sub>
      </span>
    ),
    levels: [20, 50, 100, 200],
    description: lng.pm10Description,
  },
  so2: {
    name: "SO2",
    component: (
      <span>
        SO<sub>2</sub>
      </span>
    ),
    levels: [20, 80, 250, 350],
    description: lng.so2Description,
  },
  no2: {
    name: "NO2",
    component: (
      <span>
        NO<sub>2</sub>
      </span>
    ),
    levels: [40, 70, 150, 200],
    description: lng.no2Description,
  },
  co: {
    name: "CO",
    levels: [4400, 9400, 12400, 15400],
    description: lng.coDescription,
  },
};

interface AirQualityItemProps {
  name: string;
  value: number;
}

const LEVELS: { [key in PollutantLevel]: lng } = {
  good: lng.good,
  fair: lng.fair,
  moderate: lng.moderate,
  poor: lng.poor,
  "very-poor": lng.veryPoor,
};

export default function AirQualityItem({ name, value }: AirQualityItemProps) {
  const { weather } = useContext(LocationContext);
  const t = useTranslation();
  const [pollutant, setPollutant] = useState<PollutantInfo>();
  const [collapsed, setCollapsed] = useState(true);
  const level = pollutant
    ? calculatePollutantLevel(value, pollutant)
    : undefined;

  useEffect(() => {
    setPollutant(POLLUTANTS[name]);
  }, [name]);

  useEffect(() => {
    setCollapsed(true);
  }, [weather]);

  return pollutant ? (
    <>
      <tr>
        <td className="text-text-secondary italic">
          {pollutant.component || pollutant.name}
        </td>
        <td>
          <div className="flex items-center gap-1">
            <AirQualityLevel level={level} />
            <IconButton
              size="small"
              className="scale-[0.6] text-text-secondary"
              icon="info"
              onClick={() => setCollapsed((current) => !current)}
            />
          </div>
        </td>
        <td className="flex gap-1">
          <span className="font-">{value}</span>
          <span className="font-light italic text-text-secondary text-[0.875em]">
            μg/m<sup>3</sup>
          </span>
        </td>
      </tr>
      <tr>
        <td colSpan={3} className="overflow-hidden">
          <div
            className={clsx(
              "transition-all border-divider",
              collapsed ? "max-h-0" : "max-h-60 border-b-[1px]"
            )}
          >
            <div className="flex gap-1">
              <span className="text-text-secondary">{`${t(
                lng.currentLevel
              )} -`}</span>
              <span className="font-semibold">
                {t(LEVELS[level || "good"])}
              </span>
              <button
                className="ml-auto text-text-secondary text-sm"
                onClick={() => setCollapsed(true)}
              >
                {t(lng.hide)}
              </button>
            </div>
            <div
              className="p-2 mb-2 text-sm"
              dangerouslySetInnerHTML={{ __html: t(pollutant.description) }}
            />
          </div>
        </td>
      </tr>
    </>
  ) : null;
}

function calculatePollutantLevel(
  value: number,
  pollutant: PollutantInfo
): PollutantLevel {
  if (value <= pollutant.levels[0]) return "good";
  if (value <= pollutant.levels[1]) return "fair";
  if (value <= pollutant.levels[2]) return "moderate";
  if (value <= pollutant.levels[3]) return "poor";
  return "very-poor";
}
