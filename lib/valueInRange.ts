import { RangeList } from "types";

export default function valueInRange<T>(
  value: number,
  ranges: RangeList<T>
): T | null {
  const found = ranges.find(
    (item) => value >= item.range[0] && value < item.range[1]
  );
  return found ? found.value : null;
}
