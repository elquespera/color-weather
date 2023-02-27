import { IconSize, IconType } from "@/types";
import clsx from "clsx";
import Icon from "./Icon";

interface IconButtonProps {
  icon: IconType;
  size?: IconSize;
  onClick?: () => void;
  className?: string;
}

export default function IconButton({
  icon,
  size = "medium",
  className,
}: IconButtonProps) {
  return (
    <button
      className={clsx(
        "relative overflow-hidden rounded-full",
        "flex items-center justify-center",
        "focus:outline-none focus-visible:bg-primary-300  ",
        size === "small" && "w-6 h-6",
        size === "medium" && "w-8 h-8",
        size === "large" && "w-10 h-10",
        className
      )}
    >
      <span
        className={clsx(
          "absolute inset-0 transition-all bg-primary-400 opacity-0",
          "hover:opacity-10 active:opacity-30"
        )}
      />
      <Icon type={icon} size="medium" />
    </button>
  );
}
