import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

interface ButtonGroupProps {
  items?: string[];
  selected?: string;
  onChange?: (selected: string) => void;
}

export default function ButtonGroup({
  items,
  selected,
  onChange,
}: ButtonGroupProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<string>();
  const selectedIndex = items?.findIndex((item) => item === selectedItem);

  function handleClick(item: string) {
    setSelectedItem(item);
    if (onChange) onChange(item);
  }

  useEffect(() => {
    const buttonWidth = 2;
    wrapperRef.current?.style.setProperty(
      "--wapp-button-group-offset",
      `${buttonWidth * (selectedIndex === undefined ? -1 : selectedIndex)}em`
    );
  }, [wrapperRef, selectedIndex]);

  useEffect(() => setSelectedItem(selected), [selected]);

  return (
    <div
      ref={wrapperRef}
      className="
        relative flex bg-switch-unchecked
        overflow-hidden rounded-xl shadow-inset-switch
        transition-opacity opacity-80
        focus-within:opacity-100
        active:opacity-100
        hover:opacity-100
        select-none"
    >
      <span
        className="
        absolute inset-0 w-[2em] bg-switch 
        translate-x-button-group-offset
        transition-transform"
      />

      {items &&
        items.map((item) => (
          <button
            className={clsx(
              `relative text-text-contrast pt-[0.1em] pb-[0.2em] w-[2em] focus:outline-none focus-visible:bg-primary-sub-header`
            )}
            key={item}
            onClick={() => handleClick(item)}
          >
            <span className="leading-none text-sm">{item}</span>
          </button>
        ))}
    </div>
  );
}
