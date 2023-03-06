import Icon from "./ui/Icon";

const ICON_ROTATION = 90;

interface WindIconProps {
  degree?: number;
  capitalize?: boolean;
}

export default function WindIcon({ degree = 0, capitalize }: WindIconProps) {
  return (
    <div
      className="w-6 h-6 overflow-hidden"
      style={{ transform: `rotate(${ICON_ROTATION + degree}deg)` }}
    >
      <Icon type="wind" />
    </div>
  );
}
