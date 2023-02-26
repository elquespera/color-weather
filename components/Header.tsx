import clsx from "clsx";
import { APP_TITLE, ROUTES } from "consts";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const currentRouteIndex = ROUTES.findIndex(
    ({ route }) => route === router.pathname
  );
  const currentRoute = ROUTES[currentRouteIndex];

  useEffect(() => {
    let title = APP_TITLE;
    if (currentRoute) title += ` | ${currentRoute.title}`;
    document.title = title;
  }, [currentRoute, router]);

  useEffect(() => {
    const tabWidth = 7;
    if (headerRef.current) {
      headerRef.current.style.setProperty(
        "--wapp-tab-offset",
        `${tabWidth * currentRouteIndex}rem`
      );
    }
  }, [headerRef, currentRouteIndex]);

  return (
    <header
      ref={headerRef}
      className={`
        fixed w-full h-header p-1 md:p-2 pb-0 md:pb-0 
        flex flex-col gap-2 items-center justify-between
        bg-slate-800 text-white
        shadow-md`}
    >
      <h1 className="text-3xl">Weather App</h1>
      <nav>
        <ul
          className={`
          relative flex gap-4 
          after:absolute after:left-0 after:bottom-0 after:h-1 after:w-tab 
          after:translate-x-tab-offset
          after:transition-transform
          after:rounded-t-md
          after:bg-white`}
        >
          {ROUTES.map(({ route, title }) => {
            return (
              <li key={route}>
                <Link
                  className={clsx(
                    "inline-block text-center p-1 w-tab",
                    router.pathname === route && "font-bold"
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
    </header>
  );
}
