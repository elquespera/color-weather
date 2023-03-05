import AppContext from "@/context/AppContext";
import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import Icon from "./ui/Icon";

interface SpinnerProps {}

const SLOW_DELAY = 500;

export default function Spinner({}: SpinnerProps) {
  const { appState } = useContext(AppContext);
  const [slow, setSlow] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (appState === "fetching") {
      setTimer(setTimeout(() => setSlow(true), SLOW_DELAY));
    } else {
      clearTimeout(timer);
      setTimeout(() => setSlow(false), 200);
    }
  }, [appState]);

  return (
    <div
      className={clsx(
        `
      absolute left-0 right-0 w-8 h-8 mt-4 mx-auto z-10
      overflow-hidden rounded-full shadow-spinner
      before:absolute before:inset-0 before:opacity-20
      before:bg-primary-600
      scale-0`,
        appState === "fetching"
          ? slow && "animate-spinner-appear"
          : slow && "animate-spinner-disappear"
      )}
    >
      <Icon
        type="loading"
        size="large"
        className="text-primary-header animate-spin"
      />
    </div>
  );
}
