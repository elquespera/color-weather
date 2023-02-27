import { useContext } from "react";
import AppContext from "@/context/AppContext";
import NavTabs from "components/ui/NavTabs";
import { APP_TITLE } from "consts";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { setRandomTheme } = useContext(AppContext);

  return (
    <header
      className={`
        fixed w-full h-header p-1 md:p-2 pb-0 md:pb-0 
        flex flex-col gap-1 items-center justify-between
        bg-primary-800 text-white
        shadow-lg transition-colors`}
    >
      <h1 className="text-3xl cursor-pointer" onClick={setRandomTheme}>
        {APP_TITLE}
      </h1>
      <NavTabs />
    </header>
  );
}
