import * as React from "react";
import { Track } from "react-native-track-player";

import { Container, AlbumCover, TextBox, Title, Subtitle } from "./styles";

export type Props = {
  song: Track;
};

export const Song = React.memo(({ song }: Props) => (
  <Container>
    <AlbumCover source={{ uri: song.artwork }} />
    <TextBox>
      <Title>{song.title}</Title>
      <Subtitle>{song.artist}</Subtitle>
    </TextBox>
  </Container>
));
