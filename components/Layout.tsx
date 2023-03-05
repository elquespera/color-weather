import LocationContext from "context/LocationContext";
import useLocationContext from "context/useLocationContext";
import AppContext from "context/AppContext";
import useAppContext from "context/useAppContext";
import Header from "./Header";
import Main from "./Main";

import { Roboto_Flex } from "next/font/google";
import clsx from "clsx";
import LocationHint from "./LocationHint";

const robotoFlex = Roboto_Flex({ subsets: ["latin", "cyrillic"] });

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const appContext = useAppContext();
  const locationContext = useLocationContext();

  return (
    <div
      className={clsx(
        "flex flex-col items-center min-w-full min-h-screen",
        robotoFlex.className
      )}
    >
      <AppContext.Provider value={appContext}>
        <LocationContext.Provider value={locationContext}>
          <Header />
          <LocationHint />
          <Main>{children}</Main>
        </LocationContext.Provider>
      </AppContext.Provider>
    </div>
  );
}
