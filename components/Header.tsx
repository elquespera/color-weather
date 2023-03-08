import { useContext, useRef, useState } from "react";
import AppContext from "context/AppContext";
import LocationContext from "context/LocationContext";
import NavTabs from "components/ui/NavTabs";
import IconButton from "components/ui/IconButton";
import Logo from "./Logo";
import Search from "./Search";
import SearchPlaceholder from "./SearchPlaceholder";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { theme, nextTheme } = useContext(AppContext);
  const { updateWeather } = useContext(LocationContext);
  const themeButtonRef = useRef<HTMLButtonElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  function handleTitleClick() {
    themeButtonRef.current?.click();
  }

  return (
    <>
      <header
        className={`
        fixed w-full h-header px-2 pt-2 pb-0 z-10
        flex flex-col justify-between
        bg-primary-800 text-white
        shadow-lg transition-colors`}
      >
        <h1 className="min-w-full flex items-center justify-between sm:gap-1 text-3xl select-none">
          <Logo onClick={handleTitleClick} />
          <div className="flex items-center">
            <SearchPlaceholder onClick={() => setSearchOpen(true)} />
            <IconButton icon="loading" onClick={updateWeather} />
          </div>
          <IconButton
            icon="theme"
            animation="spin"
            ref={themeButtonRef}
            className="flex-shrink-0"
            onClick={() => nextTheme(theme)}
          />
        </h1>
        <NavTabs />
      </header>
      <Search open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
