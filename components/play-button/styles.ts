import styled from "styled-components/native";

type Props = {
  size: number;
};

export const LoadingBox = styled.View`
  width: ${({ size }: Props) => size}px;
  height: ${({ size }: Props) => size}px;
  align-items: center;
  justify-content: center;
`;
