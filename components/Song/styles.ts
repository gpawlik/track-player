import styled from "styled-components/native";
import { Image } from "expo-image";

export const Container = styled.View`
  margin: 10px 5px;
  padding: 5px 20px;
`;

export const AlbumCover = styled(Image)`
  aspect-ratio: 1;
  width: 400px;
  margin-bottom: 20px;
`;

export const TextBox = styled.View`
  align-items: center;
  padding: 0 10px;
`;
