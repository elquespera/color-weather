import clsx from "clsx";
import React from "react";

interface ListItemProps {
  highlight?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
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
        "relative isolate p-4 ",
        onClick && "cursor-pointer",
        highlight &&
          "before:absolute before:inset-1 before:bg-primary-100 before:rounded-lg"
      )}
    >
      <div className="relative flex items-center justify-between">
        {children}
      </div>
    </div>
  );
}
