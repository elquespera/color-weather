import { lng } from "@/assets/translations";
import useTranslation from "@/hooks/useTranslation";
import clsx from "clsx";
import AppContext from "context/AppContext";
import { useContext } from "react";

interface TemperatureProps {
  value?: number;
  large?: boolean;
  feelsLike?: boolean;
  className?: string;
}

export default function Temperature({
  value,
  large,
  feelsLike,
  className,
}: TemperatureProps) {
  const { units } = useContext(AppContext);
  const t = useTranslation();

  return value ? (
    <span
      className={clsx(
        "inline-flex justify-center overflow-hidden",
        large
          ? "tracking-tighter text-7xl sm:text-9xl drop-shadow-md select-none"
          : "flex-wrap",
        className
      )}
    >
      {feelsLike && (
        <span className="mr-2 overflow-hidden text-ellipsis whitespace-nowrap">
          {t(lng.feelsLike)}
        </span>
      )}
      <span className="whitespace-nowrap">{`${Math.round(value)}${
        large ? "" : "°"
      }`}</span>
      {large && (
        <span className="text-5xl sm:text-7xl">
          °{units === "metric" ? "C" : "F"}
        </span>
      )}
    </span>
  ) : null;
}
