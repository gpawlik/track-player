import "styled-components/native";
import { lightTheme } from "../styles/theme";

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeType {}
}

type ThemeType = typeof lightTheme;
