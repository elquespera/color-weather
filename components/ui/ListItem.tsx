import clsx from "clsx";
import React from "react";

interface ListItemProps {
  highlight?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

export default function ListItem({
  highlight,
  children,
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
        highlight && "before:opacity-20 before:bg-primary-400"
      )}
    >
      <div className="relative flex gap-2 items-center justify-between">
        {children}
      </div>
    </div>
  );
}
