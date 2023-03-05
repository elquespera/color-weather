import { AppLanguage } from "types";

export enum lng {
  currentTab,
  fiveDaysTab,
  settingsTab,

  feelsLike,
  tempMin,
  tempMax,
  currentDetails,
  humidity,
  pressure,
  visibility,
  sunriseSunset,
  dayLength,
  meters,
  km,
  mBar,
  wind,
  mSec,
  mph,

  fiveDaysTitle,

  settingsTitle,
  measurementUnits,
  celsius,
  fahrenheit,
  nextTheme,
  darkMode,
  dark,
  light,
  language,

  today,
  tomorrow,
  outOf,

  searchPlaces,
  noCitiesFound,
  yourLocation,
  favorites,
  favoritesEdit,
  favoritesEditFinish,

  locationNotRequested,
  locationDenied,
  locationUnavailable,
  locationTimeout,
  locationError,
  locationTryAgain,
  locationImprove,
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
    [lng.currentDetails]: "Current conditions",
    [lng.humidity]: "Humidity",
    [lng.pressure]: "Pressure",
    [lng.visibility]: "Visibility",
    [lng.sunriseSunset]: "Sunrise/sunset",
    [lng.dayLength]: "Day duration",
    [lng.wind]: "Wind",
    [lng.meters]: "m",
    [lng.km]: "km",
    [lng.mBar]: "mBar",
    [lng.mSec]: "m/s",
    [lng.mph]: "mph",

    [lng.fiveDaysTitle]: "5 days forecast",

    [lng.settingsTitle]: "Settings",
    [lng.measurementUnits]: "Measurement units",
    [lng.celsius]: "Celsius",
    [lng.fahrenheit]: "Fahrenheit",
    [lng.nextTheme]: "Next theme",
    [lng.darkMode]: "Dark mode",
    [lng.dark]: "Dark",
    [lng.light]: "Light",
    [lng.language]: "Language",

    [lng.today]: "Today",
    [lng.tomorrow]: "Tomorrow",
    [lng.outOf]: "out of",

    [lng.searchPlaces]: "Search places",
    [lng.noCitiesFound]: "No cities were found for your request",
    [lng.yourLocation]: "Your location",
    [lng.favorites]: "Favorite places",
    [lng.favoritesEdit]: "Edit",
    [lng.favoritesEditFinish]: "Finish",

    [lng.locationNotRequested]: "Location is approximate",
    [lng.locationDenied]: "Location use was denied",
    [lng.locationUnavailable]: "Location not available",
    [lng.locationTimeout]: "Location timeout",
    [lng.locationError]: "Location error",
    [lng.locationTryAgain]:
      "Please provide access to geolocation to see weather at current location",
    [lng.locationImprove]: "Location might be approximate, click to improve.",
  },
  ru: {
    [lng.currentTab]: "Сейчас",
    [lng.fiveDaysTab]: "5 Дней",
    [lng.settingsTab]: "Настройки",

    [lng.feelsLike]: "По ощущениям",
    [lng.tempMin]: "Минимум",
    [lng.tempMax]: "Максимум",
    [lng.currentDetails]: "Текущие условия",
    [lng.humidity]: "Влажность",
    [lng.pressure]: "Давление",
    [lng.visibility]: "Видимость",
    [lng.sunriseSunset]: "Восход/заход солнца",
    [lng.dayLength]: "Световой день",
    [lng.wind]: "Ветер",
    [lng.meters]: "м",
    [lng.mBar]: "mBar",

    [lng.fiveDaysTitle]: "Прогноз на 5 дней",

    [lng.settingsTitle]: "Настройки",
    [lng.measurementUnits]: "Единицы измерения",
    [lng.celsius]: "Градусы Цельсия",
    [lng.fahrenheit]: "Градусы Фаренгейта",
    [lng.nextTheme]: "Следующая тема",
    [lng.darkMode]: "Темный режим",
    [lng.dark]: "Темный",
    [lng.light]: "Светлый",
    [lng.language]: "Язык приложения",

    [lng.today]: "Сегодня",
    [lng.tomorrow]: "Завтра",
    [lng.outOf]: "из",

    [lng.searchPlaces]: "Поиск городов",
    [lng.noCitiesFound]: "По вашему запросу ничего не найдено",
    [lng.yourLocation]: "Ваше местоположение",

    [lng.favorites]: "Избранное",
    [lng.favoritesEdit]: "Редактировать",
    [lng.favoritesEditFinish]: "Завершить",

    [lng.locationDenied]: "Геолокация запрещена пользователем",
    [lng.locationUnavailable]: "Геолокация недоступна",
    [lng.locationTimeout]: "Геолокация недоступна",
    [lng.locationError]: "Ошибка геолокации",
  },
  es: {},
};
