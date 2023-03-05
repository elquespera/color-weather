import clsx from "clsx";
import React, { ReactNode, useRef, useState } from "react";

interface ListItemProps {
  primary?: string | React.ReactNode;
  secondary?: string | React.ReactNode;
  startDecoration?: string | React.ReactNode;
  middleDecoration?: string | React.ReactNode;
  endDecoration?: string | React.ReactNode;
  collapsedElement?: string | React.ReactNode;
  hover?: boolean;
  highlight?: boolean;
  asButton?: boolean;
  ignoreEndDecorationClick?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export default function ListItem({
  primary,
  secondary,
  startDecoration,
  middleDecoration,
  endDecoration,
  collapsedElement,
  hover,
  highlight,
  asButton,
  ignoreEndDecorationClick,
  onClick,
}: ListItemProps) {
  const [collapsed, setCollapsed] = useState(true);
  const endDecorationRef = useRef<HTMLDivElement>(null);
  const renderButton = collapsedElement !== undefined || asButton;

  function handleClick(event: React.MouseEvent) {
    setCollapsed((current) => !current);
    if (!onClick) return;
    const decorationDiv = endDecorationRef.current;
    if (
      ignoreEndDecorationClick &&
      decorationDiv &&
      decorationDiv.contains(event.target as Node)
    )
      return;
    onClick(event);
  }

  return (
    <>
      <div
        onClick={handleClick}
        className={clsx(
          `relative flex flex-col isolate px-4 py-3 sm:px-5 sm:py-4
        before:absolute before:inset-1 before:rounded-2xl
        focus-within:before:bg-primary-400 focus-within:before:opacity-30`,
          (onClick || renderButton) && "cursor-pointer select-none",
          highlight && "before:opacity-20 before:bg-primary-400",
          hover &&
            (onClick || renderButton) &&
            "hover:before:opacity-20 hover:before:bg-primary-400"
        )}
      >
        <ButtonOrDiv
          asButton={renderButton}
          className="relative flex text-start focus:outline-none gap-2 md:gap-4 items-center justify-between"
        >
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
        </ButtonOrDiv>
      </div>
      {collapsedElement && (
        <div
          className={clsx(
            "px-4 sm:px-5 overflow-hidden transition-all ",
            collapsed ? "max-h-0" : "max-h-60"
          )}
        >
          {collapsedElement}
        </div>
      )}
    </>
  );
}

function ButtonOrDiv({
  asButton,
  children,
  className,
}: {
  asButton?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  return asButton ? (
    <button className={className}>{children}</button>
  ) : (
    <div className={className}>{children}</div>
  );
}
