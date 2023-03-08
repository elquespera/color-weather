import { lng } from "@/assets/translations";
import AppContext from "@/context/AppContext";
import useConvertDate from "@/hooks/useConvertDate";
import useTranslation from "@/hooks/useTranslation";
import { WindData } from "@/types";
import clsx from "clsx";
import { useContext } from "react";

interface WeatherDetailsProps {
  humidity?: number;
  pressure?: number;
  visibility?: number;
  sunrise?: number;
  sunset?: number;
  wind?: WindData;
  className?: string;
}

export default function WeatherDetails({
  humidity,
  pressure,
  visibility,
  sunrise,
  sunset,
  wind,
  className,
}: WeatherDetailsProps) {
  const { units } = useContext(AppContext);
  const t = useTranslation();
  const titleColumnClass = "text-text-secondary";
  const [, , convertTime] = useConvertDate();

  return (
    <div
      className={clsx(
        "grid grid-cols-[auto,1fr] gap-x-8 sm:gap-x-12 gap-y-1 grid-col text-sm sm:text-base",
        className
      )}
    >
      {humidity && (
        <>
          <span className={titleColumnClass}>{t(lng.humidity)}</span>
          <span>{humidity}%</span>
        </>
      )}

      {pressure && (
        <>
          <span className={titleColumnClass}>{t(lng.pressure)}</span>
          <span>
            {pressure} {t(lng.mBar)}
          </span>
        </>
      )}

      {visibility && (
        <>
          <span className={titleColumnClass}>{t(lng.visibility)}</span>
          <span>
            {Math.round(visibility * 100) / 100000} {t(lng.km)}
          </span>
        </>
      )}
      {sunrise && sunset && (
        <>
          <span className={titleColumnClass}>{t(lng.sunriseSunset)}</span>
          <span>
            {convertTime(sunrise)}, {convertTime(sunset)}
          </span>
          <span className={titleColumnClass}>{t(lng.dayLength)}</span>
          <span>{convertTime(sunset - sunrise)}</span>
        </>
      )}
      {wind && (
        <>
          <span className={titleColumnClass}>{t(lng.wind)}</span>
          <span>{`${Math.round(wind.speed)} ${t(
            units === "imperial" ? lng.mph : lng.mSec
          )}`}</span>
        </>
      )}
    </div>
  );
}
