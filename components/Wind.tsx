import { useContext } from "react";
import AppContext from "context/AppContext";
import clsx from "clsx";
import { WindData } from "types";
import useTranslation from "@/hooks/useTranslation";
import { lng } from "@/assets/translations";
import WindIcon from "./WindIcon";
import WindProperties from "./WindProperties";

interface WindProps {
  data?: WindData;
  className?: string;
}

export default function Wind({ data, className }: WindProps) {
  const t = useTranslation();
  const { units } = useContext(AppContext);

  return data ? (
    <div className={clsx(className)}>
      <div className="grid grid-cols-[auto,auto,1fr] gap-3 sm:gap-4">
        <div className="text-3xl sm:text-5xl text-primary-header">
          {Math.round(data.speed)}
        </div>
        <div className="flex flex-col text-text-secondary">
          <WindIcon degree={data.deg} />
          {t(units === "metric" ? lng.mSec : lng.mph)}
        </div>
        <div>
          <WindProperties data={data} />
        </div>
      </div>
    </div>
  ) : null;
}
