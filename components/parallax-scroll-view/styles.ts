import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { LinearGradient } from "expo-linear-gradient";

const HEADER_HEIGHT = 250;

export const Container = styled(ThemedView)`
  flex: 1;
`;

export const StyledScrollView = styled(Animated.ScrollView)`
  flex: 1;
`;

export const Header = styled(Animated.View)`
  height: ${HEADER_HEIGHT}px;
`;

export const Content = styled(ThemedView)`
  flex: 1;
  padding: 20px;
  gap: 10px;
  overflow: hidden;
  padding-bottom: 80px;
`;

export const Title = styled(ThemedText)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
`;

export const GradientFill = styled(LinearGradient)`
  border-radius: 50px;
  border-width: 3px;
  border-color: white;
`;

export const ButtonPressable = styled.Pressable`
  position: absolute;
  top: ${HEADER_HEIGHT - 25}px;
  right: 20px;
  border-radius: 50px;
`;
