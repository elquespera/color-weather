import AppContext from "@/context/AppContext";
import { useContext } from "react";

export default function useConvertDate() {
  const { language } = useContext(AppContext);

  return function (dt: number) {
    const dateObj = new Date(dt * 1000);
    const date = dateObj.toLocaleString(language, {
      month: "long",
      day: "numeric",
    });
    const time = dateObj.toLocaleString(language, {
      hour: "2-digit",
      minute: "2-digit",
    });

    return `${date}, ${time}`;
  };
}
