import styled from "styled-components/native";

import { Theme } from "@/styles/theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }: Theme) => theme.colors.gray900};
  font-size: 12px;
`;

export const LinkText = styled.Text`
  color: ${({ theme }: Theme) => theme.colors.primaryBlue};
  font-size: 12px;
  margin-top: 15px;
  padding-vertical: 15px;
`;
