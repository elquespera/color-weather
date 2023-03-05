import { PollutantLevel } from "types";
import Icon from "./ui/Icon";

interface AirQualityLevelProps {
  level?: PollutantLevel;
}

const LEVELS: { [key in PollutantLevel]: number } = {
  "very-poor": 0,
  poor: 1,
  fair: 2,
  moderate: 3,
  good: 4,
};

export default function AirQualityLevel({
  level = "good",
}: AirQualityLevelProps) {
  return (
    <span className="flex sm:gap-[0.15em]" title={level}>
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
