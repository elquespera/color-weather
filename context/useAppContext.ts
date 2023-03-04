import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "lib/storage";
import {
  DEFAULT_THEME,
  setCurrentTheme,
  getNextTheme,
  ThemeType,
  ThemeMode,
  setCurrentThemeMode,
} from "lib/themes";
import { AppLanguage, AppState, APP_LANGUAGES, MeasurementUnits } from "types";
import { DEFAULT_APP_LANGUAGE, DEFAULT_UNITS } from "consts";
import { defaultAppContext } from "./AppContext";

export default function useAppContext() {
  const [appContext, setAppContext] = useState({
    ...defaultAppContext,
    setTheme,
    nextTheme,
    setThemeMode,
    setUnits,
    setLanguage,
    setAppState,
  });

  function setTheme(theme: ThemeType) {
    setAppContext((current) => {
      return { ...current, theme };
    });
    setLocalStorage({ theme });
    setCurrentTheme(theme);
  }

  function nextTheme(theme: ThemeType) {
    setTheme(getNextTheme(theme));
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

  function setAppState(state: AppState) {
    setAppContext((current) => {
      let fetching = current.fetchingCount;

      let newState: AppState | null = null;
      if (state === "fetching") {
        if (fetching === 0) newState = "fetching";
        fetching += 1;
      } else if (state === "ready") {
        if (fetching === 1) newState = "ready";
        fetching -= 1;
      }
      return {
        ...current,
        fetchingCount: fetching,
        appState: newState || current.appState,
      };
    });
  }

  useEffect(() => {
    const stored = getLocalStorage();
    setAppContext({
      ...appContext,
      theme: stored.theme || DEFAULT_THEME,
      themeMode:
        stored.themeMode || matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      units: stored.units || DEFAULT_UNITS,
      language:
        stored.language ||
        APP_LANGUAGES.find((language) =>
          navigator.language.startsWith(language)
        ) ||
        DEFAULT_APP_LANGUAGE,
    });
    if (stored.theme) setCurrentTheme(stored.theme);
    if (stored.themeMode) setCurrentThemeMode(stored.themeMode);
  }, []);

  return appContext;
}
