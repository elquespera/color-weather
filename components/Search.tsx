import { lng } from "assets/translations";
import useTranslation from "hooks/useTranslation";
import clsx from "clsx";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import IconButton from "components/ui/IconButton";
import AppContext from "context/AppContext";
import {
  setMetaThemeColor,
  THEMES_META,
  THEME_MODE_BACKGROUNDS,
} from "lib/themes";
import { AppLanguage, CitySearchResponse } from "types";
import fetchData from "lib/fetchData";
import LocationContext from "@/context/LocationContext";
import ListItem from "./ui/ListItem";
import Icon from "./ui/Icon";

interface SearchProps {
  open?: boolean;
  onClose?: () => void;
}

function fetchCities() {
  const cache = new Map<string, CitySearchResponse>();

  return async (q: string, lang: AppLanguage): Promise<CitySearchResponse> => {
    if (q === "") return [];
    const request = { lang, q };
    const key = JSON.stringify(request);
    if (cache.has(key)) return cache.get(key) || [];

    const response = await fetchData("app", "search", request);

    if (response.ok) {
      const data: CitySearchResponse = await response.json();
      cache.set(key, data);
      return data;
    } else {
      return [];
    }
  };
}

export default function Search({ open, onClose }: SearchProps) {
  const t = useTranslation();
  const { language, theme, themeMode } = useContext(AppContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const fetch = useCallback(fetchCities(), []);
  const [cities, setCities] = useState<CitySearchResponse>([]);
  const { currentCity, setLocation } = useContext(LocationContext);

  const [value, setValue] = useState("");

  function handleClose() {
    if (onClose) onClose();
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

  function handleCityClick(lat: number, lon: number) {
    setLocation(lat, lon);
    handleClose();
  }

  function handleCurrentCityClick() {
    if (!currentCity) return;
    setLocation(currentCity.lat, currentCity.lon);
    handleClose();
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

  useEffect(() => {
    async function getData(q: string) {
      setCities(await fetch(q, language));
    }
    getData(value);
  }, [value, language]);

  return (
    <div
      className={clsx(
        "inset-0 flex justify-center",
        open ? "fixed z-10" : "hidden"
      )}
    >
      <div
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
        <ul>
          {cities.length > 0 ? (
            cities.map(({ name, country, lat, lon }, index) => (
              <ListItem
                key={index}
                primary={`${name}, ${country}`}
                secondary={`${lat} ${lon}`}
                startDecoration={
                  <Icon type="location" className="text-text-secondary" />
                }
                hover
                onClick={() => handleCityClick(lat, lon)}
              />
            ))
          ) : (
            <ListItem
              primary={`${currentCity?.name}, ${currentCity?.country}`}
              secondary={`${currentCity?.lat}, ${currentCity?.lon}`}
              startDecoration={
                <Icon type="near" className="text-primary-header" />
              }
              hover
              onClick={handleCurrentCityClick}
            />
          )}
        </ul>
      </div>
    </div>
  );
}
