import { useContext, useRef, useState } from "react";
import AppContext from "context/AppContext";
import NavTabs from "components/ui/NavTabs";
import IconButton from "components/ui/IconButton";
import Logo from "./Logo";
import Search from "./Search";
import SearchPlaceholder from "./SearchPlaceholder";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { theme, nextTheme } = useContext(AppContext);
  const themeButtonRef = useRef<HTMLButtonElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  function handleTitleClick() {
    themeButtonRef.current?.click();
  }

  function handleSearchOpen() {
    setSearchOpen(true);
  }

  return (
    <>
      <header
        className={`
        fixed w-full h-header px-2 pt-2 pb-0
        flex flex-col gap-1 items-center justify-between
        bg-primary-800 text-white
        shadow-lg transition-colors`}
      >
        <h1 className="flex items-center gap-3 text-3xl select-none">
          <Logo onClick={handleTitleClick} />
          <SearchPlaceholder onClick={handleSearchOpen} />
          <IconButton
            icon="theme"
            animation="spin"
            ref={themeButtonRef}
            onClick={() => nextTheme(theme)}
          />
        </h1>
        <NavTabs />
      </header>
      <Search open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
