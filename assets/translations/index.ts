import { AppLanguage } from "types";

export enum lng {
  currentTab,
  fiveDaysTab,
  settingsTab,

  feelsLike,
  tempMin,
  tempMax,
  updatedAt,
  localTime,
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

  airQuality,
  currentLevel,
  good,
  fair,
  moderate,
  poor,
  veryPoor,

  pm25Description,
  pm10Description,
  so2Description,
  no2Description,
  coDescription,
  hide,
}

type LanguageData = {
  [key in AppLanguage]: { [key in lng]?: string };
};

export const languageData: LanguageData = {
  en: {
    [lng.currentTab]: "Current",
    [lng.fiveDaysTab]: "5 Days",
    [lng.settingsTab]: "Settings",
    [lng.updatedAt]: "Updated at",
    [lng.feelsLike]: "Feels like",
    [lng.localTime]: "Local time",

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

    [lng.airQuality]: "Air Quality",
    [lng.currentLevel]: "Current level",
    [lng.good]: "good",
    [lng.fair]: "fair",
    [lng.moderate]: "moderate",
    [lng.poor]: "poor",
    [lng.veryPoor]: "very poor",

    [lng.pm25Description]:
      "Particulate matter of a diameter of 2.5 microns (<i>PM<sub>2.5</sub></i>) can be inhaled into the lungs and induce adverse health effects. Exposure to high levels of <i>PM<sub>2.5</sub></i> can cause respiratory and cardiovascular problems.",
    [lng.pm10Description]:
      "Particulate matter of a diameter of 10 microns (<i>PM<sub>10</sub></i>) are less dangerous than <i>PM<sub>2.5</sub></i>, but prolonged exposure might be harmful.",
    [lng.so2Description]:
      "Sulfur dioxide (<i>SO<sub>2</sub></i>) is emitted by burning fossil fuels. It can cause respiratory problems such as bronchoconstriction and asthma.",
    [lng.no2Description]:
      "Nitrogen dioxide(<i>NO<sub>2</sub></i>) is mosty produced by car emissions. <i>NO<sub>2</sub></i> inhalation can lead to lung inflammation and reduced lung function.",
    [lng.coDescription]:
      "Carbon monoxide (<i>CO</i>) is a poisonous gas produced by burning different substances. ",
    [lng.hide]: "Hide",
  },
  ru: {
    [lng.currentTab]: "Сейчас",
    [lng.fiveDaysTab]: "5 Дней",
    [lng.settingsTab]: "Настройки",

    [lng.feelsLike]: "По ощущениям",
    [lng.updatedAt]: "Обновлено в",
    [lng.tempMin]: "Минимум",
    [lng.tempMax]: "Максимум",
    [lng.localTime]: "Местное время",
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
