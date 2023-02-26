import clsx from "clsx";
import { APP_TITLE, ROUTES } from "consts";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const router = useRouter();
  const currentRoute = ROUTES.find(({ route }) => route === router.pathname);

  useEffect(() => {
    let title = APP_TITLE;
    if (currentRoute) title += ` | ${currentRoute.title}`;
    document.title = title;
  }, [currentRoute, router]);

  return (
    <header className="fixed w-full md:w-max-app h-header p-1 md:p-2 pb-0 md:pb-0 flex flex-col gap-2 items-center justify-between  bg-green-300">
      <h1 className="text-3xl">Weather App</h1>
      <nav>
        <ul className="flex gap-4">
          {ROUTES.map(({ route, title }) => {
            return (
              <li key={route}>
                <Link
                  className={clsx(router.pathname === route && "font-bold")}
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
