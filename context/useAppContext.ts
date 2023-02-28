import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "lib/storage";
import {
  DEFAULT_THEME,
  setCurrentTheme,
  getRandomTheme,
  ThemeType,
  ThemeMode,
  setCurrentThemeMode,
  DEFAULT_THEME_MODE,
} from "lib/themes";
import { AppLanguage, MeasurementUnits } from "types";
import { DEFAULT_APP_LANGUAGE, DEFAULT_UNITS } from "consts";
import { defaultAppContext } from "./AppContext";

export default function useAppContext() {
  const [appContext, setAppContext] = useState({
    ...defaultAppContext,
    setTheme,
    setRandomTheme,
    setThemeMode,
    setUnits,
    setLanguage,
  });

  function setTheme(theme: ThemeType) {
    setAppContext((current) => {
      return { ...current, theme };
    });
    setLocalStorage({ theme });
    setCurrentTheme(theme);
  }

  function setRandomTheme() {
    setTheme(getRandomTheme(appContext.theme));
  }

  function setUnits(units: MeasurementUnits) {
    setAppContext((current) => {
      return { ...current, units };
    });
    setLocalStorage({ units });
  }

  function setThemeMode(themeMode: ThemeMode) {
    setAppContext((current) => {
      return { ...current, themeMode };
    });
    setLocalStorage({ themeMode });
    setCurrentThemeMode(themeMode);
  }

  function setLanguage(language: AppLanguage) {
    setAppContext((current) => {
      return { ...current, language };
    });
    setLocalStorage({ language });
  }

  useEffect(() => {
    const stored = getLocalStorage();
    setAppContext({
      ...appContext,
      theme: stored.theme || DEFAULT_THEME,
      themeMode: stored.themeMode || DEFAULT_THEME_MODE,
      units: stored.units || DEFAULT_UNITS,
      language: stored.language || DEFAULT_APP_LANGUAGE,
    });
    if (stored.theme) setCurrentTheme(stored.theme);
    if (stored.themeMode) setCurrentThemeMode(stored.themeMode);
  }, []);

  return appContext;
}
