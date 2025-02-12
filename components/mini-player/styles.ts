import styled from "styled-components/native";
import { Image } from "expo-image";

export const Container = styled.View<{ bottomSpacing: number }>`
  flex-direction: row;
  align-items: center;
  background-color: #222;
  padding: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-bottom: ${({ bottomSpacing = 0 }) => bottomSpacing + 12}px;
`;

export const TrackImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 8px;
`;

export const SongInfo = styled.Pressable`
  flex: 1;
  margin-left: 10px;
`;

export const SongTitle = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const ArtistName = styled.Text`
  color: gray;
  font-size: 14px;
`;

export const ButtonBox = styled.View`
  padding: 10px;
`;
