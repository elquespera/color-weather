// Theme Types & consts

export const THEMES = [
  "hopbush",
  "mountain-meadow",
  "starship",
  "honey-flower",
  "shakespeare",
  "broom",
  "turquoise-blue",
  "nandor",
  "governor-bay",
  "denim",
  "deluge",
  "amaranth",
  "golden-sand",
  "blue-gem",
  "eastern-blue",
] as const;

export type ThemeType = typeof THEMES[number];

export type ThemeMode = "light" | "dark";

export const DEFAULT_THEME: ThemeType = "hopbush";
export const DEFAULT_THEME_MODE = "light";

export const THEMES_META: {
  [key in ThemeType]: { name: string; color: string };
} = {
  hopbush: { name: "Hopbush", color: "#8a2a6c" },
  "mountain-meadow": { name: "Mountain meadow", color: "#065f3e" },
  starship: { name: "Starship", color: "#496113" },
  "honey-flower": { name: "Honey flower", color: "#7b2aa9" },
  shakespeare: { name: "Shakespeare", color: "#244c66" },
  broom: { name: "Broom", color: "#87670c" },
  "turquoise-blue": { name: "Turquoise blue", color: "#13575c" },
  nandor: { name: "Nandor", color: "#323d39" },
  "governor-bay": { name: "Governor bay", color: "#292cc3" },
  denim: { name: "Denim", color: "#1563b8" },
  deluge: { name: "Deluge", color: "#64498a" },

  amaranth: { name: "Amaranth", color: "#991839" },
  "golden-sand": { name: "Golden sand", color: "#92471a" },
  "blue-gem": { name: "Blue gem", color: "#330fc8" },
  "eastern-blue": { name: "Eastern blue", color: "#1e5f6c" },
} as const;

export const THEME_MODE_BACKGROUNDS: { [key in ThemeMode]: string } = {
  light: "#fff",
  dark: "#000",
};

export function setMetaThemeColor(color: string) {
  let meta = document.querySelector("meta[name=theme-color]");
  if (meta) meta.setAttribute("content", color);
}

export function setCurrentTheme(current: ThemeType) {
  THEMES.forEach((theme) => {
    const themeName = `${theme}-theme`;
    document.body.classList.toggle(themeName, current === theme);
  });
  setMetaThemeColor(THEMES_META[current].color);
}

export function getNextTheme(previous: ThemeType): ThemeType {
  const themeIndex = THEMES.indexOf(previous);
  return THEMES[(themeIndex + 1) % THEMES.length];
}

export function setCurrentThemeMode(themeMode: ThemeMode) {
  document.body.classList.toggle("dark-mode", themeMode === "dark");
}
