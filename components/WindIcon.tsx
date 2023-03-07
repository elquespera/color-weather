import Icon from "./ui/Icon";

const ICON_ROTATION = 135;

interface WindIconProps {
  degree?: number;
}

export default function WindIcon({ degree = 0 }: WindIconProps) {
  return (
    <div
      className="w-6 h-6 overflow-hidden"
      style={{ transform: `rotate(${ICON_ROTATION + degree}deg)` }}
    >
      <Icon type="near" />
    </div>
  );
}
