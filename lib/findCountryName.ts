import { AppLanguage, APP_LANGUAGES } from "types";
import countries from "assets/countries/countries.json";

export default function findCountryName(code: string, language: string) {
  const lang = language === "cz" ? "cs" : (language as AppLanguage);
  let c = code.toLowerCase();
  const country = countries.find((country) => country.code === c);
  return country ? country[lang] : code;
}
