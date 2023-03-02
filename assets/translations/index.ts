import { AppLanguage } from "types";

export enum lng {
  currentTab,
  fiveDaysTab,
  settingsTab,

  feelsLike,
  tempMin,
  tempMax,

  settingsTitle,
  measurementUnits,
  celsius,
  fahrenheit,
  nextTheme,
  darkMode,
  dark,
  light,
  language,

  outOf,

  searchPlaces,
  noCitiesFound,
  yourLocation,
  favorites,
  favoritesEdit,
  favoritesEditFinish,
}

type LanguageData = {
  [key in AppLanguage]: { [key in lng]?: string };
};

export const languageData: LanguageData = {
  en: {
    [lng.currentTab]: "Current",
    [lng.fiveDaysTab]: "5 Days",
    [lng.settingsTab]: "Settings",

    [lng.feelsLike]: "Feels like",
    [lng.tempMin]: "Min",
    [lng.tempMax]: "Max",

    [lng.settingsTitle]: "Settings",
    [lng.measurementUnits]: "Measurement units",
    [lng.celsius]: "Celsius",
    [lng.fahrenheit]: "Fahrenheit",
    [lng.nextTheme]: "Next theme",
    [lng.darkMode]: "Dark mode",
    [lng.dark]: "Dark",
    [lng.light]: "Light",
    [lng.language]: "Language",

    [lng.outOf]: "out of",

    [lng.searchPlaces]: "Search places",
    [lng.noCitiesFound]: "No cities were found for your request",
    [lng.yourLocation]: "Your location",
    [lng.favorites]: "Favorite places",
    [lng.favoritesEdit]: "Edit",
    [lng.favoritesEditFinish]: "Finish",
  },
  ru: {
    [lng.currentTab]: "Сейчас",
    [lng.fiveDaysTab]: "5 Дней",
    [lng.settingsTab]: "Настройки",

    [lng.feelsLike]: "По ощущениям",
    [lng.tempMin]: "Минимум",
    [lng.tempMax]: "Максимум",

    [lng.settingsTitle]: "Настройки",
    [lng.measurementUnits]: "Единицы измерения",
    [lng.celsius]: "Градусы Цельсия",
    [lng.fahrenheit]: "Градусы Фаренгейта",
    [lng.nextTheme]: "Следующая тема",
    [lng.darkMode]: "Темный режим",
    [lng.dark]: "Темный",
    [lng.light]: "Светлый",
    [lng.language]: "Язык приложения",

    [lng.outOf]: "из",

    [lng.searchPlaces]: "Поиск городов",
    [lng.noCitiesFound]: "По вашему запросу ничего не найдено",
    [lng.yourLocation]: "Ваше местоположение",

    [lng.favorites]: "Избранное",
    [lng.favoritesEdit]: "Редактировать",
    [lng.favoritesEditFinish]: "Завершить",
  },
  es: {},
};
