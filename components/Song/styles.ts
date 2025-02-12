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

export const Title = styled.Text`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 4px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  font-weight: 400;
`;
