import { lng } from "@/assets/translations";
import AppContext from "@/context/AppContext";
import useTranslation from "@/hooks/useTranslation";
import valueInRange from "@/lib/valueInRange";
import { useContext, useEffect, useState } from "react";
import { RangeList, WindData } from "types";

interface WindPropertiesProps {
  data?: WindData;
}

const WIND_DIRECTIONS: RangeList<lng> = [
  { range: [337.5, 22.5], value: lng.north },
  { range: [22.5, 67.5], value: lng.northEast },
  { range: [67.5, 112.5], value: lng.east },
  { range: [112.5, 157.5], value: lng.southEast },
  { range: [157.5, 202.5], value: lng.south },
  { range: [202.5, 247.5], value: lng.southWest },
  { range: [247.5, 292.5], value: lng.west },
  { range: [292.5, 292.5], value: lng.northWest },
];

export default function WindProperties({ data }: WindPropertiesProps) {
  const t = useTranslation();
  const { units } = useContext(AppContext);

  return data ? (
    <span className="flex gap-2">
      <span>{t(valueInRange(data.deg, WIND_DIRECTIONS) || lng.south)}</span>
      <span></span>
    </span>
  ) : null;
}
