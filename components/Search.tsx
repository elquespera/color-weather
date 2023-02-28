import { lng } from "assets/translations";
import useTranslation from "hooks/useTranslation";
import clsx from "clsx";
import React, { useContext, useEffect, useRef, useState } from "react";
import IconButton from "components/ui/IconButton";
import AppContext from "@/context/AppContext";
import {
  setMetaThemeColor,
  THEMES_META,
  THEME_MODE_BACKGROUNDS,
} from "@/lib/themes";

interface SearchProps {
  open?: boolean;
  onClose?: () => void;
}

export default function Search({ open, onClose }: SearchProps) {
  const t = useTranslation();
  const { theme, themeMode } = useContext(AppContext);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState("");

  function handleClose() {
    if (onClose) onClose();
  }

  function handleWrapperClick(event: React.MouseEvent) {
    if (event.target !== wrapperRef.current) return;
    handleClose();
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Escape") handleClose();
  }

  function handleClear() {
    setValue("");
    inputRef.current?.focus();
  }

  useEffect(() => {
    if (open) inputRef.current?.focus();
    setValue("");
  }, [open]);

  useEffect(() => {
    setMetaThemeColor(
      open ? THEME_MODE_BACKGROUNDS[themeMode] : THEMES_META[theme].color
    );
  }, [theme, themeMode, open]);

  return (
    <div
      className={clsx(
        "inset-0 flex justify-center",
        open ? "fixed z-10" : "hidden"
      )}
      onClick={handleWrapperClick}
    >
      <div
        ref={wrapperRef}
        className={clsx(
          `bg-background w-full p-4 
          aminate-tr scale-80 opacity-0 origin-top`,
          open && "animate-appear"
        )}
      >
        <div className="flex gap-2 items-center">
          <IconButton
            icon="back"
            className={clsx(
              "text-text-secondary rotate-[270deg]",
              open && "animate-rotate"
            )}
            onClick={handleClose}
          />
          <input
            type="text"
            ref={inputRef}
            size={0}
            value={value}
            placeholder={t(lng.searchPlaces)}
            spellCheck={false}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={clsx(
              `bg-transparent text-xl w-full min-w-0
            placeholder:text-text-secondary
            focus:outline-none
            selection:text-primary-dark selection:bg-primary-200`
            )}
          />
          {value !== "" && (
            <IconButton
              icon="close"
              className="text-text-secondary"
              onClick={handleClear}
            />
          )}
        </div>
      </div>
    </div>
  );
}
