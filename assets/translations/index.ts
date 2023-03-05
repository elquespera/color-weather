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
  pollutant,
  level,
  concentration,
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
    [lng.pollutant]: "Pollutant",
    [lng.level]: "Level",
    [lng.concentration]: "Concentration",
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

    [lng.airQuality]: "Качество воздуха",
    [lng.pollutant]: "Загрязнитель",
    [lng.level]: "Уровень",
    [lng.concentration]: "Концентрация",
    [lng.currentLevel]: "Текущий уровень",
    [lng.good]: "хорошо",
    [lng.fair]: "приемлемо",
    [lng.moderate]: "средне",
    [lng.poor]: "плохо",
    [lng.veryPoor]: "очень плохо",

    [lng.pm25Description]:
      "Частицы диаметром 2,5 микрона (<i>PM<sub>2.5</sub></i>) могут попадать в легкие и вызывать негативные последствия для здоровья. Высокие уровни <i>PM<sub>2.5</sub></i> могут вызвать проблемы с дыханием и сердечно-сосудистой системой.",
    [lng.pm10Description]:
      "Частицы диаметром 10 микрон (<i>PM<sub>10</sub></i>) менее опасны, чем <i>PM<sub>2.5</sub></i>, но продолжительное воздействие может быть вредным.",
    [lng.so2Description]:
      "Диоксид серы (<i>SO<sub>2</sub></i>) выделяется при сжигании ископаемых топлив. Он может вызывать проблемы с дыханием, такие как бронхоконстрикция и астма.",
    [lng.no2Description]:
      "Диоксид азота (<i>NO<sub>2</sub></i>) в основном выделяется при выбросах автомобилей. Вдыхание <i>NO<sub>2</sub></i> может привести к воспалению легких и снижению их функции.",
    [lng.coDescription]:
      "Окись углерода (<i>CO</i>) – ядовитый газ, который выделяется при сжигании различных веществ.",
    [lng.hide]: "Скрыть",
  },
  es: {
    [lng.currentTab]: "Actual",
    [lng.fiveDaysTab]: "5 Días",
    [lng.settingsTab]: "Ajustes",
    [lng.updatedAt]: "Actualizado",
    [lng.feelsLike]: "Sensación",
    [lng.localTime]: "Hora local",

    [lng.tempMin]: "Mín",
    [lng.tempMax]: "Máx",
    [lng.currentDetails]: "Condiciones actuales",
    [lng.humidity]: "Humedad",
    [lng.pressure]: "Presión",
    [lng.visibility]: "Visibilidad",
    [lng.sunriseSunset]: "Salida/puesta de sol",
    [lng.dayLength]: "Duración del día",
    [lng.wind]: "Viento",
    [lng.meters]: "m",
    [lng.km]: "km",
    [lng.mBar]: "mBar",
    [lng.mSec]: "m/s",
    [lng.mph]: "mph",

    [lng.fiveDaysTitle]: "Pronóstico de 5 días",

    [lng.settingsTitle]: "Ajustes",
    [lng.measurementUnits]: "Unidades de medida",
    [lng.celsius]: "Celsius",
    [lng.fahrenheit]: "Fahrenheit",
    [lng.nextTheme]: "Siguiente tema",
    [lng.darkMode]: "Modo oscuro",
    [lng.dark]: "Oscuro",
    [lng.light]: "Claro",
    [lng.language]: "Idioma",

    [lng.today]: "Hoy",
    [lng.tomorrow]: "Mañana",
    [lng.outOf]: "de",

    [lng.searchPlaces]: "Buscar lugares",
    [lng.noCitiesFound]: "No se encontraron ciudades para su solicitud",
    [lng.yourLocation]: "Tu ubicación",
    [lng.favorites]: "Lugares favoritos",
    [lng.favoritesEdit]: "Editar",
    [lng.favoritesEditFinish]: "Terminar",

    [lng.locationNotRequested]: "La ubicación es aproximada",
    [lng.locationDenied]: "El uso de ubicación fue denegado",
    [lng.locationUnavailable]: "Ubicación no disponible",
    [lng.locationTimeout]: "Tiempo de espera de ubicación agotado",
    [lng.locationError]: "Error de ubicación",
    [lng.locationTryAgain]:
      "Proporcione acceso a la geolocalización para ver el clima en la ubicación actual",
    [lng.locationImprove]:
      "La ubicación puede ser aproximada, haga clic para mejorar.",

    [lng.airQuality]: "Calidad del aire",
    [lng.pollutant]: "Contaminante",
    [lng.level]: "Nivel",
    [lng.concentration]: "Concentración",
    [lng.currentLevel]: "Nivel actual",
    [lng.good]: "bueno",
    [lng.fair]: "regular",
    [lng.moderate]: "moderado",
    [lng.poor]: "malo",
    [lng.veryPoor]: "muy malo",

    [lng.pm25Description]:
      "Las partículas de materia de un diámetro de 2,5 micras (<i>PM<sub>2,5</sub></i>) pueden inhalarse en los pulmones e inducir efectos adversos para la salud. La exposición a niveles altos de <i>PM<sub>2,5</sub></i> puede causar problemas respiratorios y cardiovasculares.",
    [lng.pm10Description]:
      "Las partículas de materia de un diámetro de 10 micras (<i>PM<sub>10</sub></i>) son menos peligrosas que las <i>PM<sub>2,5</sub></i>, pero la exposición prolongada puede ser perjudicial.",
    [lng.so2Description]:
      "El dióxido de azufre (<i>SO<sub>2</sub></i>) se emite al quemar combustibles fósiles. Puede causar problemas respiratorios como broncoconstricción y asma.",
    [lng.no2Description]:
      "El dióxido de nitrógeno (<i>NO<sub>2</sub></i>) se produce principalmente por las emisiones de los automóviles. La inhalación de <i>NO<sub>2</sub></i> puede provocar inflamación pulmonar y reducción de la función pulmonar.",
    [lng.coDescription]:
      "El monóxido de carbono (<i>CO</i>) es un gas venenoso que se produce al quemar diferentes sustancias.",
    [lng.hide]: "Ocultar",
  },

  de: {
    [lng.currentTab]: "Aktuell",
    [lng.fiveDaysTab]: "5 Tage",
    [lng.settingsTab]: "Einstellungen",
    [lng.updatedAt]: "Aktualisiert um",
    [lng.feelsLike]: "Gefühlt wie",
    [lng.localTime]: "Lokale Zeit",
    [lng.tempMin]: "Min",
    [lng.tempMax]: "Max",
    [lng.currentDetails]: "Aktuelle Bedingungen",
    [lng.humidity]: "Luftfeuchtigkeit",
    [lng.pressure]: "Luftdruck",
    [lng.visibility]: "Sichtweite",
    [lng.sunriseSunset]: "Sonnenaufgang/Sonnenuntergang",
    [lng.dayLength]: "Tageslänge",
    [lng.wind]: "Wind",
    [lng.meters]: "m",
    [lng.km]: "km",
    [lng.mBar]: "mBar",
    [lng.mSec]: "m/s",
    [lng.mph]: "mph",

    [lng.fiveDaysTitle]: "5-Tage-Vorhersage",

    [lng.settingsTitle]: "Einstellungen",
    [lng.measurementUnits]: "Maßeinheiten",
    [lng.celsius]: "Celsius",
    [lng.fahrenheit]: "Fahrenheit",
    [lng.nextTheme]: "Nächstes Thema",
    [lng.darkMode]: "Dunkelmodus",
    [lng.dark]: "Dunkel",
    [lng.light]: "Hell",
    [lng.language]: "Sprache",

    [lng.today]: "Heute",
    [lng.tomorrow]: "Morgen",
    [lng.outOf]: "von",

    [lng.searchPlaces]: "Suche Orte",
    [lng.noCitiesFound]: "Für Ihre Anfrage wurden keine Städte gefunden",
    [lng.yourLocation]: "Ihr Standort",
    [lng.favorites]: "Favoriten",
    [lng.favoritesEdit]: "Bearbeiten",
    [lng.favoritesEditFinish]: "Fertig",

    [lng.locationNotRequested]: "Standort ist ungefähr",
    [lng.locationDenied]: "Standortnutzung wurde abgelehnt",
    [lng.locationUnavailable]: "Standort nicht verfügbar",
    [lng.locationTimeout]: "Zeitüberschreitung für Standort",
    [lng.locationError]: "Standortfehler",
    [lng.locationTryAgain]:
      "Bitte geben Sie Zugriff auf den Geolocation an, um das Wetter an Ihrem aktuellen Standort zu sehen",
    [lng.locationImprove]:
      "Standort könnte ungefähr sein, klicken Sie zur Verbesserung.",

    [lng.airQuality]: "Luftqualität",
    [lng.pollutant]: "Schadstoff",
    [lng.level]: "Niveau",
    [lng.concentration]: "Konzentration",
    [lng.currentLevel]: "Aktuelles Niveau",
    [lng.good]: "gut",
    [lng.fair]: "befriedigend",
    [lng.moderate]: "mäßig",
    [lng.poor]: "schlecht",
    [lng.veryPoor]: "sehr schlecht",

    [lng.pm25Description]:
      "Partikelmaterie von einem Durchmesser von 2,5 Mikrometern (<i>PM<sub>2,5</sub></i>) kann eingeatmet werden und zu gesundheitlichen Problemen führen. Eine hohe Belastung mit <i>PM<sub>2,5</sub></i> kann Atemwegs- und Herz-Kreislauf-Probleme verursachen.",
    [lng.pm10Description]:
      "Partikelmaterie von einem Durchmesser von 10 Mikrometern (<i>PM<sub>10</sub></i>) ist weniger gefährlich als <i>PM<sub>2,5</sub></i>, aber eine längere Exposition kann schädlich sein.",
    [lng.so2Description]:
      "Schwefeldioxid (<i>SO<sub>2</sub></i>) wird bei der Verbrennung von fossilen Brennstoffen freigesetzt. Es kann zu Atemproblemen wie Bronchokonstriktion und Asthma führen.",
    [lng.no2Description]:
      "Stickstoffdioxid (<i>NO<sub>2</sub></i>) wird hauptsächlich durch Autoemissionen produziert. Einatmen von <i>NO<sub>2</sub></i> kann zu einer Entzündung der Lunge und einer verminderten Lungenfunktion führen.",
    [lng.coDescription]:
      "Kohlenmonoxid (<i>CO</i>) ist ein giftiges Gas, das durch Verbrennung verschiedener Substanzen entsteht.",
    [lng.hide]: "Verstecken",
  },
  cs: {
    [lng.currentTab]: "Aktuální",
    [lng.fiveDaysTab]: "5 dní",
    [lng.settingsTab]: "Nastavení",
    [lng.updatedAt]: "Aktualizováno v",
    [lng.feelsLike]: "Pocitově",
    [lng.localTime]: "Místní čas",

    [lng.tempMin]: "Min",
    [lng.tempMax]: "Max",
    [lng.currentDetails]: "Aktuální podmínky",
    [lng.humidity]: "Vlhkost",
    [lng.pressure]: "Tlak",
    [lng.visibility]: "Viditelnost",
    [lng.sunriseSunset]: "Východ/Západ slunce",
    [lng.dayLength]: "Délka dne",
    [lng.wind]: "Vítr",
    [lng.meters]: "m",
    [lng.km]: "km",
    [lng.mBar]: "mBar",
    [lng.mSec]: "m/s",
    [lng.mph]: "mph",

    [lng.fiveDaysTitle]: "5 dní předpovědi",

    [lng.settingsTitle]: "Nastavení",
    [lng.measurementUnits]: "Jednotky měření",
    [lng.celsius]: "Celsia",
    [lng.fahrenheit]: "Fahrenheita",
    [lng.nextTheme]: "Další téma",
    [lng.darkMode]: "Tmavý režim",
    [lng.dark]: "Tmavý",
    [lng.light]: "Světlý",
    [lng.language]: "Jazyk",

    [lng.today]: "Dnes",
    [lng.tomorrow]: "Zítra",
    [lng.outOf]: "z",

    [lng.searchPlaces]: "Hledat místa",
    [lng.noCitiesFound]: "Pro vaši žádost nebyla nalezena žádná města",
    [lng.yourLocation]: "Vaše poloha",
    [lng.favorites]: "Oblíbená místa",
    [lng.favoritesEdit]: "Upravit",
    [lng.favoritesEditFinish]: "Dokončit",

    [lng.locationNotRequested]: "Poloha je přibližná",
    [lng.locationDenied]: "Použití polohy bylo odepřeno",
    [lng.locationUnavailable]: "Poloha není k dispozici",
    [lng.locationTimeout]: "Vypršel časový limit pro polohu",
    [lng.locationError]: "Chyba polohy",
    [lng.locationTryAgain]:
      "Pro zobrazení počasí v aktuální poloze poskytněte přístup k geolokaci",
    [lng.locationImprove]: "Poloha může být přibližná, klikněte pro vylepšení.",

    [lng.airQuality]: "Kvalita ovzduší",
    [lng.pollutant]: "Znečišťující látka",
    [lng.level]: "Úroveň",
    [lng.concentration]: "Koncentrace",
    [lng.currentLevel]: "Aktuální úroveň",
    [lng.good]: "dobrá",
    [lng.fair]: "ferová",
    [lng.moderate]: "střední",
    [lng.poor]: "špatná",
    [lng.veryPoor]: "velmi špatná",

    [lng.pm25Description]:
      "Částice o velikosti 2,5 mikronů (<i>PM<sub>2,5</sub></i>) mohou být vdechnuty do plic a způsobit negativní zdravotní účinky. Vystavení vysokým koncentracím <i>PM<sub>2,5</sub></i> může způsobit respirační a kardiovaskulární problémy.",
    [lng.pm10Description]:
      "Částice o velikosti 10 mikronů (<i>PM<sub>10</sub></i>) jsou méně nebezpečné než <i>PM<sub>2,5</sub></i>, ale dlouhodobá expozice může být škodlivá.",
    [lng.so2Description]:
      "Oxid siřičitý (<i>SO<sub>2</sub></i>) je emitován při spalování fosilních paliv. Může způsobit respirační problémy jako broncho-konstrikce a astma.",
    [lng.no2Description]:
      "Oxid dusičitý (<i>NO<sub>2</sub></i>) je převážně produkován emisemi z vozidel. Inhalace <i>NO<sub>2</sub></i> může vést k zánětu plic a omezení funkce plic.",
    [lng.coDescription]:
      "Oxid uhelnatý (<i>CO</i>) je jedovatý plyn produkovaný spalováním různých látek. ",
    [lng.hide]: "Skrýt",
  },
};
