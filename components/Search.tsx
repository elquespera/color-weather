import LocationContext from "context/LocationContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import Icon from "components/ui/Icon";
import useTranslation from "@/hooks/useTranslation";
import { lng } from "@/assets/translations";
import clsx from "clsx";

interface SearchProps {
  open?: boolean;
}

export default function Search({ open }: SearchProps) {
  const t = useTranslation();
  const { city } = useContext(LocationContext);

  const [value, setValue] = useState("");
  const [hasFocus, setHasFocus] = useState(false);
  const [placeholder, setPlaceholder] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  useEffect(() => {
    setPlaceholder(hasFocus ? t(lng.searchPlaces) : city);
  }, [city, hasFocus]);

  return (
    <label
      className="flex items-center justify-center gap-2 px-3 pt-1 pb-1
      bg-primary-800 rounded-full overflow-hidden
      transition-all
      hover:bg-primary-700 focus-within:bg-primary-700"
    >
      <Icon type="search" className="text-primary-200 cursor-pointer" />
      <input
        type="text"
        size={0}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        className={clsx(
          `bg-transparent text-xl text-primary-200
        w-full min-w-0
        placeholder:text-primary-200 placeholder:text-center
        focus:outline-none
        selection:text-primary-dark selection:bg-primary-200`,
          hasFocus && "placeholder:text-start"
        )}
      />
    </label>
  );
}
