import { lng } from "@/assets/translations";
import AppContext from "@/context/AppContext";
import useTranslation from "@/hooks/useTranslation";
import capitalizeStr from "@/lib/capitalizeStr";
import valueInRange from "@/lib/valueInRange";
import { useContext } from "react";
import { RangeList, WindData } from "types";

interface WindPropertiesProps {
  data?: WindData;
  capitalize?: boolean;
  className?: string;
}

const WIND_STRENGTHS: RangeList<lng> = [
  { range: [0, 0.5], value: lng.windCalm },
  { range: [0.5, 5.5], value: lng.windLight },
  { range: [5.5, 10.7], value: lng.windModerate },
  { range: [10.7, 17.1], value: lng.windStrong },
  { range: [17.1, 24.4], value: lng.windGale },
  { range: [24.4, 32.6], value: lng.windStorm },
  { range: [32.6, 999], value: lng.windHurricane },
];

const MPH_FACTOR = 2.237;

export default function WindStrength({
  data,
  className,
  capitalize,
}: WindPropertiesProps) {
  const t = useTranslation();
  const { units } = useContext(AppContext);

  const speed = data
    ? units === "metric"
      ? data.speed
      : data.speed / MPH_FACTOR
    : null;

  let value =
    speed === null
      ? null
      : t(valueInRange(speed, WIND_STRENGTHS) || lng.windCalm);

  if (value && capitalize) value = capitalizeStr(value);

  return data ? <span className={className}>{value}</span> : null;
}
