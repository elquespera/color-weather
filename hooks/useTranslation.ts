import AppContext from "@/context/AppContext";
import { useContext } from "react";
import { lng, languageData } from "assets/translations";
import { DEFAULT_APP_LANGUAGE } from "@/consts";

export default function useTranslation() {
  const { language } = useContext(AppContext);

  return (translationKey: lng) => {
    let translation = languageData[language][translationKey];
    if (!translation) {
      translation = languageData[DEFAULT_APP_LANGUAGE][translationKey];
    }
    return translation;
  };
}
