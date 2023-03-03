import AppContext from "@/context/AppContext";
import { useContext } from "react";

export default function useConvertDate() {
  const { language } = useContext(AppContext);

  function date(dt?: number) {
    if (dt === undefined) return;
    const dateObj = new Date(dt * 1000);
    return dateObj.toLocaleString(language, {
      month: "long",
      day: "numeric",
    });
  }

  function time(dt?: number) {
    if (dt === undefined) return;
    const dateObj = new Date(dt * 1000);
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
