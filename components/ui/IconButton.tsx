import React, { forwardRef } from "react";
import { IconSize, IconType } from "@/types";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Icon from "./Icon";

const BUTTON_ANIMATION_DURATION = 500;
type IconButtonAnimation = "spin";

interface IconButtonProps {
  icon: IconType;
  size?: IconSize;
  animation?: IconButtonAnimation;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const IconButton = forwardRef(function IconButton(
  { icon, size = "medium", className, animation, onClick }: IconButtonProps,
  ref: React.Ref<HTMLButtonElement>
) {
  const [currentAnimation, setCurrentAnimation] =
    useState<IconButtonAnimation>();

  function handleClick(event: React.MouseEvent) {
    if (animation === "spin") {
      setCurrentAnimation(animation);
    }
    if (onClick) onClick(event);
  }

  useEffect(() => {
    if (currentAnimation) {
      setTimeout(
        () => setCurrentAnimation(undefined),
        BUTTON_ANIMATION_DURATION
      );
    }
  }, [currentAnimation]);

  return (
    <button
      className={clsx(
        "relative overflow-hidden rounded-full",
        "flex items-center justify-center",
        "focus:outline-none focus-visible:bg-primary-300",
        size === "small" && "w-6 h-6",
        size === "medium" && "w-8 h-8",
        size === "large" && "w-10 h-10",
        currentAnimation === "spin" && "animate-spin-fast",
        className
      )}
      ref={ref}
      onClick={handleClick}
    >
      <span
        className="absolute inset-0 transition-all bg-primary-400 opacity-0
          hover:opacity-20 active:opacity-30"
      />
      <Icon type={icon} size="medium" />
    </button>
  );
});

export default IconButton;
