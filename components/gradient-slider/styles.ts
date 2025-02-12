import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { Animated, Platform } from "react-native";

const isAndroid = Platform.OS === "android";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const TimeLabel = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  margin-horizontal: 8px;
`;

export const SliderContainer = styled.View`
  flex: 1;
  position: relative;
  margin-horizontal: 10px;
`;

// Margin fix for the following issue: https://github.com/callstack/react-native-slider/issues/98
export const StyledSlider = styled(Slider)`
  height: 40px;
  padding: 0px;
  margin-left: ${isAndroid ? -10 : -5}px;
  margin-right: ${isAndroid ? -10 : -5}px;
`;

export const GradientTrack = styled(Animated.View)`
  position: absolute;
  padding-horizontal: 2px;
  top: 17px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  height: 5px;
  border-radius: 3px;
`;

export const GradientFill = styled(LinearGradient)`
  flex: 1;
  border-radius: 3px;
`;
