import AppContext from "@/context/AppContext";
import { useContext } from "react";

export default function useConvertDate() {
  const { language } = useContext(AppContext);

  return function (dt: number) {
    return new Date(dt * 1000).toLocaleString(language, {
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };
}
