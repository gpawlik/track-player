import "styled-components/native";

export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  neutral200: "#D5DEE4",
  gray50: "#FAFAFA",
  gray75: "#F4F4F5",
  gray100: "#EEEEEE",
  gray200: "#E5E7EB",
  gray300: "#D4D4D8",
  gray400: "#BFBBBA",
  gray450: "#999",
  gray500: "#71717A",
  gray600: "#52525B",
  gray700: "#3F3F46",
  gray800: "#27272A",
  gray900: "#18181B",
  warmGray100: "#F5F5F4",
  warmGray500: "#78716C",
  green200: "#BBF7D0",
  green600: "#16A34A",
  indigo50: "#EEF2FF",
  indigo400: "#818CF8",
  indigo600: "#4F46E5",
  primaryBlue: "#4F46E5",
  secondaryBlue: "#0288d1",
  amber50: "#FFFBEB",
  amber300: "#FCD34D",
  amber600: "#D97706",
  amber700: "#B45309",
  emerald200: "#A7F3D0",
  emerald300: "#6EE7B7",
  emerald500: "#10B981",
  emerald600: "#059669",
  red400: "#F87171",
  red500: "#DD2B0E",
  red600: "#DC2626",
  red700: "#F1583E",
  yellow100: "#FEF9C3",
  rose100: "#FFE4E6",
  blue50: "#F4F7FF",
  blue100: "#E0E7FF",
  blue200: "#BFDBFE",
  teal700: "#0F766E",
  zinc700: "#3F3F46",
  transparent: "transparent",
  orange: "#EF4444",
};

export const gradient = ["#FF913E", "#EB3B9E", "#A03EFF"];

export const darkThemeColors = {
  white: "#121212",
  black: "#FFFFFF",
  neutral200: "#2A3037",
  gray50: "#141414", // Very dark gray
  gray75: "#202020", // Dark gray
  gray100: "#242424",
  gray200: "#282828",
  gray300: "#333333",
  gray400: "#393939",
  gray450: "#454545", // A middle gray
  gray500: "#999999",
  gray600: "#A9A9A9",
  gray700: "#CCCCCC",
  gray800: "#EEEEEE",
  gray900: "#F1F1F1", // Lightest gray
  warmGray100: "#282828",
  warmGray500: "#E5E1DD",
  green200: "#BBF7D0", // Dark green for background accents
  green600: "#16A34A",
  indigo50: "#171E3D", // Dark indigo
  indigo400: "#A5B4FC",
  indigo600: "#5566fb", // Light indigo for contrast
  primaryBlue: "#5566fb", // Adjusted primary blue for dark mode
  secondaryBlue: "#9FCBEF",
  amber50: "#1C0F02",
  amber300: "#E9A821", // Brighter amber for emphasis
  amber600: "#FAAD63",
  amber700: "#EBAA6D",
  emerald200: "#065F46",
  emerald300: "#16A34A",
  emerald500: "#6EE7B7",
  emerald600: "#10B981",
  red400: "#FCA5A5",
  red500: "#FF8374",
  red600: "#FB6D6D",
  red700: "#F43F3F",
  yellow100: "#2C2701",
  rose100: "#3F1D21",
  blue50: "#0D162D",
  blue100: "#111C3B",
  blue200: "#153D7B",
  teal700: "#67E8F9",
  zinc700: "#D1D1E1",
  transparent: "transparent",
  orange: "#FF6B6B",
};

export const fontSizes = {
  fs0: "10px",
  fs1: "12px",
  fs2: "14px",
  fs3: "16px",
  fs4: "18px",
  fs5: "20px",
  fs6: "24px",
  fs7: "28px",
  fs8: "32px",
  fs9: "36px",
  fs10: "42px",
  fs11: "48px",
  fs12: "54px",
  fs13: "60px",
  fs14: "68px",
  fs15: "76px",
  fs16: "84px",
  fs17: "92px",
};

export const spacers = {
  ss0: "0px",
  ss1: "1px",
  ss2: "2px",
  ss3: "4px",
  ss4: "8px",
  ss5: "12px",
  ss6: "16px",
  ss7: "20px",
  ss8: "24px",
  ss9: "36px",
  ss10: "48px",
  ss11: "64px",
  ss12: "72px",
};

export const lineHeights = {
  lh1: "18px",
  lh2: "20px",
  lh3: "22px",
  lh4: "24px",
  lh5: "28px",
  lh6: "40px",
  lh7: "52px",
  lh8: "64px",
  lh9: "76px",
};

export type Colors = typeof colors;
export type DarkColors = typeof darkThemeColors;

export type FontSizes = typeof fontSizes;
export type Spacers = typeof spacers;
export type LineHeights = typeof lineHeights;

// export interface Theme {
//   colors: Colors;
//   fontSizes: FontSizes;
//   spacers: Spacers;
//   lineHeights: LineHeights;
// }

export const lightTheme = {
  colors,
  fontSizes,
  spacers,
  lineHeights,
};

export const darkTheme = {
  colors: darkThemeColors,
  fontSizes,
  spacers,
  lineHeights,
};

export type ThemeType = typeof lightTheme;

export type Theme = {
  theme: {
    colors: typeof colors;
    fontSizes: typeof fontSizes;
    spacers: typeof spacers;
    lineHeights: typeof lineHeights;
  };
};

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: typeof colors;
    fontSizes: typeof fontSizes;
    spacers: typeof spacers;
    lineHeights: typeof lineHeights;
  }
}
