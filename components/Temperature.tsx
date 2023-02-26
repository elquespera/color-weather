import clsx from "clsx";
import { AppContext } from "context/AppContext";
import { useContext } from "react";

interface TemperatureProps {
  value?: number;
  large?: boolean;
  className?: string;
}

export default function Temperature({
  value,
  large,
  className,
}: TemperatureProps) {
  const { units } = useContext(AppContext);

  return value ? (
    <span
      className={clsx(
        "inline-flex",
        large && "tracking-tighter text-7xl sm:text-9xl drop-shadow-md",
        className
      )}
    >
      {`${Math.round(value)}`}
      <span className={clsx(large && "text-5xl md:text-7xl")}>°</span>
      {large && (
        <span className="text-5xl sm:text-7xl">
          {units === "metric" ? "C" : "F"}
        </span>
      )}
    </span>
  ) : null;
}
