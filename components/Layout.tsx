import { AppContext, defaultAppContext } from "context/AppContext";
import { useEffect, useState } from "react";
import Header from "./Header";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [appContext, setAppContext] = useState(defaultAppContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const location = {
        lat: coords.latitude,
        lon: coords.longitude,
        city: "",
      };
      setAppContext({ ...appContext, location });
    });
  }, []);

  return (
    <div className="flex flex-col items-center min-w-full min-h-screen ">
      <AppContext.Provider value={appContext}>
        <Header />
        <main className="w-full md:w-max-app min-h-screen pt-header flex">
          <div className="p-4 md:p-8 w-full bg-slate-300">{children}</div>
        </main>
      </AppContext.Provider>
    </div>
  );
}
