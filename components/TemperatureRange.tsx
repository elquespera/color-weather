import Temperature from "./Temperature";
import Icon from "./ui/Icon";

interface TemperatureRangeProps {
  min?: number;
  max?: number;
}

export default function TemperatureRange({ min, max }: TemperatureRangeProps) {
  return (
    <div className="flex gap-2">
      <div className="flex gap-1 items-center">
        Day↑
        <Temperature className="font-semibold" value={max} />
      </div>
      <div>•</div>
      <div className="flex gap-1">
        Night↓
        <Temperature className="font-semibold" value={min} />
      </div>
    </div>
  );
}
