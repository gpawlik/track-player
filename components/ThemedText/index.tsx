import { TextProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyledText } from "@/components/ThemedText/styles";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "small";
};

export function ThemedText({
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <StyledText type={type} color={color} {...rest} />;
}
