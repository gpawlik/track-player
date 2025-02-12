import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "@/constants/Colors";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 32px 20px;
`;

export const Icon = styled(Ionicons)`
  margin-bottom: 10px;
`;

export const Message = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.light.text};
`;

export const SubMessage = styled.Text`
  font-size: 14px;
  color: ${Colors.light.text};
  text-align: center;
  margin-top: 5px;
`;
