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
  const { units } = useContext(AppContext);

  return data ? (
    <div className={clsx(className)}>
      <div className="grid grid-cols-[auto,auto,1fr] gap-3 sm:gap-4 items-end">
        <div className="text-5xl sm:text-6xl text-primary-header">
          {Math.round(data.speed)}
        </div>
        <div className="flex flex-col text-text-secondary gap-1">
          <WindIcon degree={data.deg} />
          <div className="text-sm sm:text-base text-text-secondary">
            {t(units === "metric" ? lng.mSec : lng.mph)}
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
        </div>
      </div>
    </div>
  ) : null;
}
