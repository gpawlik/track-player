import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";

import { Theme } from "@/styles/theme";

const { width } = Dimensions.get("window");

export const HeaderBox = styled.View<{ topPadding: number }>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ topPadding = 0 }) => topPadding + 12}px 16px 8px;
`;

export const HeaderIcon = styled.TouchableOpacity`
  width: 20px;
`;

export const HeaderTitle = styled.Text`
  font-size: 14px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }: Theme) => theme.colors.gray900};
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: Theme) => theme.colors.white};
`;

export const PlayerContainer = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  padding-bottom: 30px;
  padding-horizontal: 16px;
`;

export const RowContainer = styled(LinearGradient)`
  flex-direction: row;
  justify-content: center;
  border-radius: 20px;
  padding: 10px 30px;
  margin-vertical: 20px;
  width: 100%;
  min-height: 81px;
`;

type ButtonProps = {
  isDisabled: boolean;
};

export const ActionButton = styled.Pressable<{ isDisabled: boolean }>`
  justify-content: center;
  margin-horizontal: 15px;
  opacity: ${({ isDisabled }: ButtonProps) => (isDisabled ? 0.7 : 1)};
`;

export const AnimatedContainer = styled(Animated.View)`
  width: ${width}px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex: 1;
`;
