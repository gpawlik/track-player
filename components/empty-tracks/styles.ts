import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { Theme } from "@/styles/theme";

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
  color: ${({ theme }: Theme) => theme.colors.gray900};
`;

export const SubMessage = styled.Text`
  font-size: 14px;
  color: ${({ theme }: Theme) => theme.colors.gray900};
  text-align: center;
  margin-top: 5px;
`;
