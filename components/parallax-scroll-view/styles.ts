import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

import { colors } from "@/styles/theme";

const HEADER_HEIGHT = 250;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledScrollView = styled(Animated.ScrollView)`
  flex: 1;
`;

export const Header = styled(Animated.View)`
  height: ${HEADER_HEIGHT}px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
  gap: 10px;
  overflow: hidden;
  padding-bottom: 80px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: ${colors.white};
  font-size: 26px;
  font-weight: 600;
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
