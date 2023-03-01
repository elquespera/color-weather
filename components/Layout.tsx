import LocationContext from "context/LocationContext";
import useLocationContext from "context/useLocationContext";
import AppContext from "context/AppContext";
import useAppContext from "context/useAppContext";
import Header from "./Header";
import Main from "./Main";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const appContext = useAppContext();
  const locationContext = useLocationContext();

  return (
    <div className="flex flex-col items-center min-w-full min-h-screen ">
      <AppContext.Provider value={appContext}>
        <LocationContext.Provider value={locationContext}>
          <Header />
          <Main>{children}</Main>
        </LocationContext.Provider>
      </AppContext.Provider>
    </div>
  );
}
