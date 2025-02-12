import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const ShadowContainer = styled.View`
  shadow-color: ${({ theme }) => theme.colors.gray500};
  shadow-offset: 2px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 6px;
  elevation: 5;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Container = styled.TouchableOpacity`
  border-radius: 13px;
  flex-direction: row;
  overglow: hidden;
  padding: 6px 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Gradient = styled(LinearGradient)`
  padding: 2px;
  border-radius: 15px;
`;

export const FlexCol = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const AlbumCover = styled.Image`
  aspect-ratio: 1;
  width: 60px;
  border-radius: 10px;
  margin-right: 10px;
`;

export const TitleBox = styled.View`
  flex-direction: row;
  align-items: center;
  padding-right: 30px;
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

export const Artist = styled.Text`
  font-size: 12px;
  margin-bottom: 4px;
`;

export const TimeText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray700};
`;
