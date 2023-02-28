import { useContext, useRef } from "react";
import AppContext from "context/AppContext";
import NavTabs from "components/ui/NavTabs";
import { APP_TITLE } from "consts";
import IconButton from "./ui/IconButton";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { theme, nextTheme } = useContext(AppContext);
  const themeButtonRef = useRef<HTMLButtonElement>(null);

  function handleTitleClick() {
    themeButtonRef.current?.click();
  }

  return (
    <header
      className={`
        fixed w-full h-header p-1 md:p-2 pb-0 md:pb-0 
        flex flex-col gap-1 items-center justify-between
        bg-primary-800 text-white
        shadow-lg transition-colors`}
    >
      <h1
        className="flex items-end gap-1 text-3xl cursor-pointer select-none"
        onClick={handleTitleClick}
      >
        {APP_TITLE}
        <IconButton
          icon="theme"
          animation="spin"
          ref={themeButtonRef}
          onClick={() => nextTheme(theme)}
        />
      </h1>
      <NavTabs />
    </header>
  );
}
