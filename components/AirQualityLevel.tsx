import { POLLUTION_LEVELS, POLLUTION_LEVEL_TRANSLATIONS } from "@/consts";
import useTranslation from "@/hooks/useTranslation";
import { PollutantLevel } from "types";
import Icon from "./ui/Icon";

interface AirQualityLevelProps {
  level?: PollutantLevel;
}

export default function AirQualityLevel({
  level = "good",
}: AirQualityLevelProps) {
  const t = useTranslation();

  return (
    <span
      className="flex sm:gap-[0.15em]"
      title={t(POLLUTION_LEVEL_TRANSLATIONS[level || "good"])}
    >
      {Object.values(POLLUTION_LEVELS).map((value) => {
        return (
          <Icon
            key={value}
            size="small"
            className={
              value <= POLLUTION_LEVELS[level]
                ? "text-yellow-500"
                : "text-text-secondary opacity-40"
            }
            type={value <= POLLUTION_LEVELS[level] ? "star-filled" : "star"}
          />
        );
      })}
    </span>
  );
}
