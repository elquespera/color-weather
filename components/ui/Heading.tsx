import { Roboto_Condensed } from "next/font/google";
import clsx from "clsx";

const robotoCondensed = Roboto_Condensed({
  subsets: ["cyrillic", "latin"],
  weight: "400",
});

interface HeadingProps {
  children?: React.ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return (
    <h2
      className={clsx(
        "px-app sm:px-app-lg text-3xl sm:text-5xl text-primary-header uppercase",
        robotoCondensed.className
      )}
    >
      {children}
    </h2>
  );
}
