import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "lib/storage";
import {
  DEFAULT_THEME,
  setCurrentTheme,
  getRandomTheme,
  ThemeType,
} from "lib/themes";
import { MeasurementUnits } from "types";
import { DEFAULT_UNITS } from "consts";
import { defaultAppContext } from "./AppContext";

export default function useAppContext() {
  const [appContext, setAppContext] = useState({
    ...defaultAppContext,
    setTheme,
    setUnits,
    setRandomTheme,
  });

  function setTheme(theme: ThemeType) {
    setAppContext({ ...appContext, theme });
    setLocalStorage({ theme });
    setCurrentTheme(theme);
  }

  function setRandomTheme() {
    setTheme(getRandomTheme(appContext.theme));
  }

  function setUnits(units: MeasurementUnits) {
    setAppContext({ ...appContext, units });
    setLocalStorage({ units });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const location = {
        lat: coords.latitude,
        lon: coords.longitude,
        city: "",
      };
      setAppContext((current) => {
        return { ...current, location };
      });
    });

    const stored = getLocalStorage();
    setAppContext({
      ...appContext,
      theme: stored.theme || DEFAULT_THEME,
      units: stored.units || DEFAULT_UNITS,
    });
    if (stored.theme) setCurrentTheme(stored.theme);
  }, []);

  return appContext;
}
