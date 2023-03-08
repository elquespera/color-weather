import { useContext, useEffect, useState } from "react";
import LocationContext from "context/LocationContext";
import { PollutantLevel } from "types";
import AirQualityLevel from "./AirQualityLevel";
import clsx from "clsx";
import { lng } from "assets/translations";
import useTranslation from "hooks/useTranslation";
import { POLLUTION_LEVEL_TRANSLATIONS } from "consts";
import Icon from "./ui/Icon";

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

export default function AirQualityItem({ name, value }: AirQualityItemProps) {
  const { weather } = useContext(LocationContext);
  const t = useTranslation();
  const [pollutant, setPollutant] = useState<PollutantInfo>();
  const [collapsed, setCollapsed] = useState(true);
  const level = pollutant
    ? calculatePollutantLevel(value, pollutant)
    : undefined;

  const roundedValue = Math.round(value * 10) / 10;

  const mgM3 = (
    <span className="font-light italic text-text-secondary text-[0.875em]">
      μg/m<sup>3</sup>
    </span>
  );

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
          <button
            className="flex items-center gap-1"
            onClick={() => setCollapsed((current) => !current)}
          >
            <AirQualityLevel level={level} />
            <Icon
              type="info"
              size="small"
              className="scale-[0.8] text-text-secondary"
            />
          </button>
        </td>
        <td className="hidden sm:inline units-hide">
          <span>{`${roundedValue}  `}</span>
          <span className="units">{mgM3}</span>
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
            <div className="flex justify-between items-start gap-1">
              <div>
                <div>
                  <span className="text-text-secondary">{`${t(
                    lng.currentLevel
                  )} - `}</span>
                  <span className="font-semibold">
                    {t(POLLUTION_LEVEL_TRANSLATIONS[level || "good"])}
                  </span>
                </div>
                <div>
                  <span className="text-text-secondary">{`${t(
                    lng.concentration
                  )} - `}</span>
                  <span className="font-semibold">{`${value} `}</span>
                  {mgM3}
                </div>
              </div>
              {!collapsed && (
                <button
                  className="text-text-secondary text-sm"
                  onClick={() => setCollapsed(true)}
                >
                  {t(lng.hide)}
                </button>
              )}
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
