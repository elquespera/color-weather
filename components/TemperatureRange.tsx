import { lng } from "@/assets/translations";
import useTranslation from "@/hooks/useTranslation";
import Temperature from "./Temperature";

interface TemperatureRangeProps {
  min?: number;
  max?: number;
}

export default function TemperatureRange({ min, max }: TemperatureRangeProps) {
  const t = useTranslation();

  return (
    <div className="flex gap-2 text-text-secondary text-sm sm:text-base">
      <div className="flex gap-1">
        {t(lng.tempMin)}↓
        <Temperature className="font-semibold" value={min} />
      </div>
      <div>•</div>
      <div className="flex gap-1 items-center">
        {t(lng.tempMax)}↑
        <Temperature className="font-semibold" value={max} />
      </div>
    </div>
  );
}
