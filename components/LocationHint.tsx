import { lng } from "@/assets/translations";
import LocationContext from "@/context/LocationContext";
import useTranslation from "@/hooks/useTranslation";
import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import IconButton from "./ui/IconButton";

const AUTO_HIDE_INTERVAL = 5000;
const SHOW_INTERVAL = 3000;

export default function LocationHint() {
  const {
    gpsCoords,
    locationState: state,
    defineLocation,
  } = useContext(LocationContext);
  const t = useTranslation();
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  function autoHide() {
    setTimeout(() => {
      setOpen(false);
    }, AUTO_HIDE_INTERVAL);
  }

  function show() {
    setTimer(
      setTimeout(() => {
        setOpen(true);
      }, SHOW_INTERVAL)
    );
  }

  function hide() {
    setOpen(false);
    clearInterval(timer);
  }

  function handleClick() {
    if (state === "not-requested") {
      defineLocation();
    } else {
      setOpen(false);
    }
  }

  useEffect(() => {
    switch (state) {
      case "not-requested":
        show();
        break;
      case "granted":
        hide();
        break;
      default:
        autoHide();
    }
  }, [state]);

  useEffect(() => {
    async function checkLocation() {
      const { state } = await navigator.permissions.query({
        name: "geolocation",
      });
      if (state === "granted") {
        defineLocation();
      }
    }

    checkLocation();
  }, []);

  return (
    <div
      className={clsx(
        `fixed top-header w-auto h-auto mt-4 mx-auto z-10 text-primary-100`,
        open && !gpsCoords ? "block" : "hidden"
      )}
    >
      <div
        className={`relative flex items-center pl-6 pr-3 py-1 
          overflow-hidden mx-2 rounded-full shadow-spinner
          before:absolute before:inset-0 before:bg-primary-800 before:opacity-80`}
      >
        <button
          className="relative z-10 outline-none hover:text-text-contrast text-start"
          onClick={handleClick}
        >
          {t(
            state === "not-requested"
              ? lng.locationImprove
              : state === "denied"
              ? lng.locationDenied
              : state === "unavailable"
              ? lng.locationUnavailable
              : lng.locationTimeout
          )}
        </button>
        <IconButton
          icon="close"
          className="hover:text-text-contrast flex-shrink-0"
          onClick={() => setOpen(false)}
        />
      </div>
    </div>
  );
}
