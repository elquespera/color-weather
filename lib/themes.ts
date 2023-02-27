// Theme Types & consts

export const THEMES = [
  "hopbush",
  "mountain-meadow",
  "starship",
  "honey-flower",
  "shakespeare",
  "broom",
  "turquoise-blue",
] as const;

export type ThemeType = typeof THEMES[number];

export type ThemeAction = {
  type: "set" | "random";
  newTheme?: ThemeType;
};

export const DEFAULT_THEME: ThemeType = "hopbush";

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
} as const;

export function setCurrentTheme(current: ThemeType): ThemeType {
  THEMES.forEach((theme) => {
    const themeName = `${theme}-theme`;
    document.body.classList.toggle(themeName, current === theme);
  });
  let meta = document.querySelector("meta[name=theme-color]");
  if (meta) meta.setAttribute("content", THEMES_META[current].color);
  return current;
}

export function getRandomTheme(previous: ThemeType): ThemeType {
  let theme = previous;
  do {
    const randomIndex = Math.floor(Math.random() * THEMES.length);
    theme = THEMES[randomIndex];
  } while (theme === previous);
  return theme;
}
