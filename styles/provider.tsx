import * as React from "react";
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

import { lightTheme, darkTheme } from "@/styles/theme";

interface Props {
  children: React.ReactNode;
}

export const StyleProvider = ({ children }: Props) => {
  const scheme = useColorScheme();
  const isDarkTheme = scheme === "dark";
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const statusBarStyle = !isDarkTheme ? "dark" : "light";

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={statusBarStyle} />
      {children}
    </ThemeProvider>
  );
};
