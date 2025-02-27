import styled from "styled-components/native";

import { Theme } from "@/styles/theme";

export const Subtitle = styled.Text`
  color: ${({ theme }: Theme) => theme.colors.gray900};
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const ParallaxImage = styled.View`
  height: 100%;
  width: 100%;
  resize-mode: cover;
`;
