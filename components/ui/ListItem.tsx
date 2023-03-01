import clsx from "clsx";
import React from "react";

interface ListItemProps {
  primary?: string | React.ReactNode;
  secondary?: string | React.ReactNode;
  startDecoration?: string | React.ReactNode;
  endDecoration?: string | React.ReactNode;

  hover?: boolean;
  highlight?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export default function ListItem({
  primary,
  secondary,
  startDecoration,
  endDecoration,
  hover,
  highlight,
  onClick,
}: ListItemProps) {
  return (
    <div
      onClick={onClick}
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
      <div className="relative flex gap-4 items-center justify-between">
        {startDecoration && (
          <div className="flex-shrink-0">{startDecoration}</div>
        )}
        <div className="flex-1">
          <div className="text-primary-header sm:text-xl">{primary}</div>
          <div className="opacity-60 text-sm">{secondary}</div>
        </div>
        {endDecoration && <div className="flex-shink-0">{endDecoration}</div>}
      </div>
    </div>
  );
}
