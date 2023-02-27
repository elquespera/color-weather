import AppContext from "context/AppContext";
import useAppContext from "context/useAppContext";
import Header from "./Header";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const appContext = useAppContext();

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
