import styled from "styled-components/native";
import { Animated } from "react-native";

export const ToastContainer = styled(Animated.View)`
  position: absolute;
  bottom: 50px;
  left: 20px;
  right: 20px;
  padding: 12px;
  background-color: #c0392b;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ToastText = styled.Text`
  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;
