import { APP_TITLE, ROUTES } from "@/consts";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

type NavTabItem = {
  title: string;
  route: string;
};

export default function NavTabs() {
  const navRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const selectedIndex = ROUTES.findIndex(
    ({ route }) => route === router.pathname
  );
  const currentRoute = ROUTES[selectedIndex];

  useEffect(() => {
    let title = APP_TITLE;
    if (currentRoute) title += ` | ${currentRoute.title}`;
    document.title = title;
  }, [currentRoute, router]);

  useEffect(() => {
    const tabWidth = 7;
    if (navRef.current) {
      navRef.current.style.setProperty(
        "--wapp-tab-offset",
        `${tabWidth * (selectedIndex || 0)}em`
      );
    }
  }, [navRef, selectedIndex]);

  return (
    <nav ref={navRef}>
      <ul
        className={clsx(
          `
          relative flex gap-4 
          after:absolute after:left-0 after:bottom-0 after:h-1 after:w-tab 
          after:translate-x-tab-offset
          after:transition-transform
          after:rounded-t-md
          after:bg-white`,
          selectedIndex < 0 && "after:scale-0"
        )}
      >
        {ROUTES.map(({ title, route }, index) => {
          return (
            <li key={route}>
              <Link
                className={clsx(
                  "inline-block text-center p-1 py-3 w-tab",
                  index === selectedIndex && "font-bold"
                )}
                href={route}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
