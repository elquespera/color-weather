import React, { useContext, useRef } from "react";
import AppContext from "context/AppContext";
import { THEMES_META } from "lib/themes";
import Switch from "components/Switch";
import Icon from "components/ui/Icon";
import ListItem from "components/ui/ListItem";
import IconButton from "components/ui/IconButton";
import ButtonGroup from "components/ui/ButtonGroup";
import { APP_LANGUAGES, APP_LANGUAGES_META, AppLanguage } from "types";
import useTranslation from "@/hooks/useTranslation";
import { lng } from "@/assets/translations";

export default function Settings() {
  const themeButtonRef = useRef<HTMLButtonElement>(null);
  const languageButtonsRef = useRef<HTMLDivElement>(null);

  const t = useTranslation();

  const {
    units,
    theme,
    themeMode,
    language,
    setUnits,
    setRandomTheme,
    setThemeMode,
    setLanguage,
  } = useContext(AppContext);

  function handleUnits(checked: boolean) {
    setUnits(checked ? "imperial" : "metric");
  }

  function handleThemeMode(checked: boolean) {
    setThemeMode(checked ? "dark" : "light");
  }

  function handleNextTheme() {
    themeButtonRef.current?.click();
  }

  function handleLanguageChange(item: string) {
    setLanguage(item as AppLanguage);
  }

  function handleNextLanguage(event: React.MouseEvent) {
    const buttonDiv = languageButtonsRef.current;
    if (buttonDiv && buttonDiv.contains(event.target as Node)) {
      return;
    }
    const index = APP_LANGUAGES.indexOf(language);
    setLanguage(APP_LANGUAGES[(index + 1) % APP_LANGUAGES.length]);
  }

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl sm:text-5xl text-primary-header">
        {t(lng.settingsTitle)}
      </h2>
      <div className="flex flex-col">
        <ListItem
          highlight={units === "imperial"}
          onClick={() => handleUnits(units === "metric")}
        >
          <div>
            <div className="text-primary-header sm:text-xl">
              {t(lng.measurementUnits)}
            </div>
            <div className="opacity-60 text-sm">
              {t(units === "metric" ? lng.celsius : lng.fahrenheit)}
            </div>
          </div>
          <Switch
            checked={units === "imperial"}
            uncheckedDecoration="C°"
            checkedDecoration="F°"
            onChange={handleUnits}
          />
        </ListItem>
        <ListItem onClick={handleNextTheme}>
          <div>
            <div className="text-primary-header sm:text-xl">
              {t(lng.nextTheme)}
            </div>
            <div className="opacity-60 text-sm">{THEMES_META[theme].name}</div>
          </div>
          <IconButton
            icon="theme"
            animation="spin"
            ref={themeButtonRef}
            className="text-primary-header"
            onClick={() => setRandomTheme()}
          />
        </ListItem>
        <ListItem
          highlight={themeMode === "dark"}
          onClick={() => handleThemeMode(themeMode === "light")}
        >
          <div>
            <div className="text-primary-header sm:text-xl">
              {t(lng.darkMode)}
            </div>
            <div className="opacity-60 text-sm">
              {t(themeMode === "dark" ? lng.dark : lng.light)}
            </div>
          </div>
          <Switch
            checked={themeMode === "dark"}
            uncheckedDecoration={<Icon type="sunny" size="small" />}
            checkedDecoration={<Icon type="moon" size="small" />}
            onChange={handleThemeMode}
          />
        </ListItem>
        <ListItem onClick={(event) => handleNextLanguage(event)}>
          <div>
            <div className="text-primary-header sm:text-xl">
              {t(lng.language)}
            </div>
            <div className="opacity-60 text-sm">
              {APP_LANGUAGES_META[language].name}
            </div>
          </div>
          <div ref={languageButtonsRef}>
            <ButtonGroup
              items={APP_LANGUAGES.map((x) => x)}
              selected={language}
              onChange={handleLanguageChange}
            />
          </div>
        </ListItem>
      </div>
    </div>
  );
}
