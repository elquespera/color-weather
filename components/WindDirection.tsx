import { lng } from "@/assets/translations";
import useTranslation from "@/hooks/useTranslation";
import capitalizeStr from "@/lib/capitalizeStr";
import valueInRange from "@/lib/valueInRange";
import { useState } from "react";
import { RangeList, WindData } from "types";

interface WindPropertiesProps {
  data?: WindData;
  capitalize?: boolean;
  className?: string;
}

const WIND_DIRECTIONS: RangeList<lng> = [
  { range: [-22.5, 22.5], value: lng.north },
  { range: [337.5, 382.5], value: lng.north },
  { range: [22.5, 67.5], value: lng.northEast },
  { range: [67.5, 112.5], value: lng.east },
  { range: [112.5, 157.5], value: lng.southEast },
  { range: [157.5, 202.5], value: lng.south },
  { range: [202.5, 247.5], value: lng.southWest },
  { range: [247.5, 292.5], value: lng.west },
  { range: [292.5, 337.5], value: lng.northWest },
];

export default function WindDirection({
  data,
  capitalize,
  className,
}: WindPropertiesProps) {
  const t = useTranslation();

  let value = data
    ? t(valueInRange(data.deg, WIND_DIRECTIONS) || lng.south)
    : null;
  if (value && capitalize) value = capitalizeStr(value);
  return data ? <span className={className}>{value}</span> : null;
}
