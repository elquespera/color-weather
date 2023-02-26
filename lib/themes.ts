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

export const THEMES_NAMES: { [key in ThemeType]: string } = {
  hopbush: "Hopbush",
  "mountain-meadow": "Mountain meadow",
  starship: "Starship",
  "honey-flower": "Honey flower",
  shakespeare: "Shakespeare",
  broom: "Broom",
  "turquoise-blue": "Turquoise blue",
} as const;

export function setCurrentTheme(current: ThemeType): ThemeType {
  THEMES.forEach((theme) => {
    const themeName = `${theme}-theme`;
    document.body.classList.toggle(themeName, current === theme);
  });
  return current;
}

export function setRandomTheme(previous: ThemeType): ThemeType {
  let theme = previous;
  do {
    const randomIndex = Math.floor(Math.random() * THEMES.length);
    theme = THEMES[randomIndex];
  } while (theme === previous);
  setCurrentTheme(theme);
  return theme;
}
