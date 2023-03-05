import { POLLUTION_LEVEL_TRANSLATIONS } from "@/consts";
import useTranslation from "@/hooks/useTranslation";
import { PollutantLevel } from "types";
import Icon from "./ui/Icon";

interface AirQualityLevelProps {
  level?: PollutantLevel;
}

const LEVELS: { [key in PollutantLevel]: number } = {
  "very-poor": 0,
  poor: 1,
  moderate: 2,
  fair: 3,
  good: 4,
};

export default function AirQualityLevel({
  level = "good",
}: AirQualityLevelProps) {
  const t = useTranslation();

  return (
    <span
      className="flex sm:gap-[0.15em]"
      title={t(POLLUTION_LEVEL_TRANSLATIONS[level || "good"])}
    >
      {Object.values(LEVELS).map((value) => {
        return (
          <Icon
            key={value}
            size="small"
            className={
              value <= LEVELS[level]
                ? "text-yellow-500"
                : "text-text-secondary opacity-40"
            }
            type={value <= LEVELS[level] ? "star-filled" : "star"}
          />
        );
      })}
    </span>
  );
}
