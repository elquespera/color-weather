import { useContext } from "react";
import AppContext from "context/AppContext";
import clsx from "clsx";
import { WindData } from "types";
import useTranslation from "@/hooks/useTranslation";
import { lng } from "@/assets/translations";
import WindIcon from "./WindIcon";
import WindDirection from "./WindDirection";
import WindStrength from "./WindStrength";

interface WindProps {
  data?: WindData;
  className?: string;
}

export default function Wind({ data, className }: WindProps) {
  const t = useTranslation();
  const { units: currentUnits } = useContext(AppContext);

  const units = t(currentUnits === "metric" ? lng.mSec : lng.mph);

  const speed = data ? Math.round(data.speed) : null;

  const gust =
    data && data.gust && Math.round(data.gust) !== speed
      ? Math.round(data.gust)
      : null;

  return data ? (
    <div className={clsx(className)}>
      <div className="grid grid-cols-[auto,auto,1fr] gap-3 sm:gap-4 items-end">
        <div className="text-5xl sm:text-6xl text-primary-header">{speed}</div>
        <div className="flex flex-col text-text-secondary gap-1">
          <WindIcon degree={data.deg} />
          <div className="text-sm sm:text-base text-text-secondary">
            {units}
          </div>
        </div>
        <div className="flex flex-col">
          <WindStrength
            capitalize
            data={data}
            className="text-base sm:text-xl"
          />
          <WindDirection
            capitalize
            data={data}
            className="text-sm sm:text-base text-text-secondary"
          />
          {gust && (
            <div className="text-sm sm:text-base text-text-secondary">{`Gusts: ${Math.round(
              data.gust
            )} ${units}`}</div>
          )}
        </div>
      </div>
    </div>
  ) : null;
}
