import { lng } from "@/assets/translations";
import { TIMEZONE_OFFSET } from "@/consts";
import AppContext from "@/context/AppContext";
import capitalizeStr from "@/lib/capitalizeStr";
import { useContext } from "react";
import useTranslation from "./useTranslation";

export default function useConvertDate() {
  const t = useTranslation();
  const { language } = useContext(AppContext);

  function date(dt?: number, humanReadable = false, shortMonth = false) {
    if (dt === undefined) return;
    const dateObj = new Date(dt + TIMEZONE_OFFSET);
    if (humanReadable) {
      const today = new Date();
      let weekDay = dateObj.toLocaleString(language, { weekday: "long" });

      if (today.getDate() === dateObj.getDate()) weekDay = t(lng.today);
      if (today.getDate() + 1 === dateObj.getDate()) weekDay = t(lng.tomorrow);

      const dateProper = dateObj.toLocaleString(language, {
        month: "long",
        day: "numeric",
      });
      return capitalizeStr(`${weekDay}, ${dateProper}`);
    }
    return dateObj.toLocaleString(language, {
      month: shortMonth ? "short" : "long",
      day: "numeric",
    });
  }

  function time(dt?: number) {
    if (dt === undefined) return;
    const dateObj = new Date(dt + TIMEZONE_OFFSET);
    return dateObj.toLocaleString("ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function dateTime(dt?: number) {
    if (dt === undefined) return;
    return `${date(dt)}, ${time(dt)}`;
  }

  return [dateTime, date, time];
}
