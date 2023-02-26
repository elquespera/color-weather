import { getLocalStorage, setLocalStorage } from "lib/storage";
import {
  DEFAULT_THEME,
  setCurrentTheme,
  setRandomTheme,
  ThemeAction,
  ThemeType,
} from "lib/themes";
import { AppContext, defaultAppContext } from "context/AppContext";
import { useEffect, useReducer, useState } from "react";
import Header from "./Header";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useReducer(setAppTheme, DEFAULT_THEME);
  const [appContext, setAppContext] = useState({
    ...defaultAppContext,
    setTheme,
  });

  function setAppTheme(current: ThemeType, action: ThemeAction): ThemeType {
    const newTheme =
      action.type === "set"
        ? setCurrentTheme(action.newTheme || DEFAULT_THEME)
        : setRandomTheme(current);
    setLocalStorage({ theme: newTheme });
    return newTheme;
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const location = {
        lat: coords.latitude,
        lon: coords.longitude,
        city: "",
      };
      setAppContext({ ...appContext, location });
    });
    const { theme: storedTheme } = getLocalStorage();
    setTheme({ type: "set", newTheme: storedTheme });
  }, []);

  useEffect(() => {
    setAppContext({ ...appContext, theme });
  }, [theme]);

  return (
    <div className="flex flex-col items-center min-w-full min-h-screen ">
      <AppContext.Provider value={appContext}>
        <Header />
        <main className="w-full md:w-max-app min-h-screen pt-header flex">
          <div className="p-6 md:p-8 w-full">{children}</div>
        </main>
      </AppContext.Provider>
    </div>
  );
}
