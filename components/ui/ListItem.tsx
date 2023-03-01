import clsx from "clsx";
import React, { useRef } from "react";

interface ListItemProps {
  primary?: string | React.ReactNode;
  secondary?: string | React.ReactNode;
  startDecoration?: string | React.ReactNode;
  middleDecoration?: string | React.ReactNode;
  endDecoration?: string | React.ReactNode;
  hover?: boolean;
  highlight?: boolean;
  ignoreEndDecorationClick?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export default function ListItem({
  primary,
  secondary,
  startDecoration,
  middleDecoration,
  endDecoration,
  hover,
  highlight,
  ignoreEndDecorationClick,
  onClick,
}: ListItemProps) {
  const endDecorationRef = useRef<HTMLDivElement>(null);

  function handleClick(event: React.MouseEvent) {
    if (!onClick) return;
    const decorationDiv = endDecorationRef.current;
    if (ignoreEndDecorationClick && decorationDiv) {
      if (decorationDiv.contains(event.target as Node)) {
        return;
      }
    }
    onClick(event);
  }

  return (
    <div
      onClick={handleClick}
      className={clsx(
        `relative isolate px-4 py-3 sm:px-5 sm:py-4
        before:absolute before:inset-1 before:rounded-lg
        focus-within:before:bg-primary-400 focus-within:before:opacity-30`,
        onClick && "cursor-pointer select-none",
        highlight && "before:opacity-20 before:bg-primary-400",
        hover &&
          onClick &&
          "hover:before:opacity-20 hover:before:bg-primary-400"
      )}
    >
      <div className="relative flex gap-2 md:gap-4 items-center justify-between">
        {startDecoration && (
          <div className="flex-shrink-0">{startDecoration}</div>
        )}
        <div className="flex-1">
          <div className="text-primary-header sm:text-xl">{primary}</div>
          <div className="opacity-60 text-sm">{secondary}</div>
        </div>
        {middleDecoration && (
          <div className="flex-shink-0">{middleDecoration}</div>
        )}
        {endDecoration && (
          <div ref={endDecorationRef} className="flex-shink-0">
            {endDecoration}
          </div>
        )}
      </div>
    </div>
  );
}
