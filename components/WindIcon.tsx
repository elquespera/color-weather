import clsx from "clsx";
import Icon from "./ui/Icon";

const ICON_ROTATION = 135;

interface WindIconProps {
  degree?: number;
  small?: boolean;
  className?: string;
}

export default function WindIcon({
  degree = 0,
  small,
  className,
}: WindIconProps) {
  return (
    <div
      className={clsx(
        "overflow-hidden",
        small ? "w-4 h-4" : "w-6 h-6",
        className
      )}
      style={{ transform: `rotate(${ICON_ROTATION + degree}deg)` }}
    >
      <Icon type="near" size={small ? "small" : "medium"} />
    </div>
  );
}
