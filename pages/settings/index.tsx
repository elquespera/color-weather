import React, { useContext, useRef } from "react";
import AppContext from "context/AppContext";
import { THEMES, THEMES_META } from "lib/themes";
import Switch from "components/Switch";
import Icon from "components/ui/Icon";
import ListItem from "components/ui/ListItem";
import IconButton from "components/ui/IconButton";
import ButtonGroup from "components/ui/ButtonGroup";
import { APP_LANGUAGES, APP_LANGUAGES_META, AppLanguage } from "types";
import useTranslation from "hooks/useTranslation";
import { lng } from "assets/translations";

export default function Settings() {
  const themeButtonRef = useRef<HTMLButtonElement>(null);
  const t = useTranslation();

  const {
    units,
    theme,
    themeMode,
    language,
    setUnits,
    nextTheme,
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

  function handleNextLanguage() {
    const index = APP_LANGUAGES.indexOf(language);
    setLanguage(APP_LANGUAGES[(index + 1) % APP_LANGUAGES.length]);
  }

  return (
    <>
      <ul>
        <ListItem
          primary={t(lng.measurementUnits)}
          secondary={t(units === "metric" ? lng.celsius : lng.fahrenheit)}
          endDecoration={
            <Switch
              checked={units === "imperial"}
              uncheckedDecoration="C°"
              checkedDecoration="F°"
              onChange={handleUnits}
            />
          }
          ignoreEndDecorationClick
          highlight={units === "imperial"}
          onClick={() => handleUnits(units === "metric")}
        />

        <ListItem
          primary={t(lng.nextTheme)}
          secondary={`${THEMES_META[theme].name} (${
            THEMES.indexOf(theme) + 1
          } ${t(lng.outOf)} ${THEMES.length})`}
          endDecoration={
            <IconButton
              icon="theme"
              animation="spin"
              ref={themeButtonRef}
              className="text-primary-header"
              onClick={() => nextTheme(theme)}
            />
          }
          ignoreEndDecorationClick
          onClick={handleNextTheme}
        />

        <ListItem
          primary={t(lng.darkMode)}
          secondary={t(themeMode === "dark" ? lng.dark : lng.light)}
          highlight={themeMode === "dark"}
          endDecoration={
            <Switch
              checked={themeMode === "dark"}
              uncheckedDecoration={<Icon type="sunny" size="small" />}
              checkedDecoration={<Icon type="moon" size="small" />}
              onChange={handleThemeMode}
            />
          }
          ignoreEndDecorationClick
          onClick={() => handleThemeMode(themeMode === "light")}
        />

        <ListItem
          primary={t(lng.language)}
          secondary={APP_LANGUAGES_META[language].name}
          endDecoration={
            <ButtonGroup
              items={APP_LANGUAGES.map((x) => x)}
              selected={language}
              onChange={handleLanguageChange}
            />
          }
          ignoreEndDecorationClick
          onClick={handleNextLanguage}
        />
      </ul>
      <div
        className="fixed top-[100%] translate-y-[-100%]
        flex flex-wrap gap-x-4
        p-app sm:p-app-lg text-sm text-text-secondary
        before:absolute before:inset-4 sm:before:inset-6
        before:rounded-full
        before:bg-background before:opacity-75"
      >
        <a
          className="reference-link"
          href="https://github.com/elquespera"
          target="_blank"
          title="Github"
        >
          @elquespera
        </a>
        <a
          className="reference-link"
          href="https://uicolors.app/"
          target="_blank"
          title="Colors by UI Colors"
        >
          @uicolors
        </a>
        <a
          className="reference-link"
          href="https://openweathermap.org/api"
          target="_blank"
          title="Weather API from Open Weather"
        >
          @openweather
        </a>
      </div>
    </>
  );
}
