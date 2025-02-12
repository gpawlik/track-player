import * as React from "react";
import { Track } from "react-native-track-player";

import { ThemedText } from "@/components/ThemedText";

import { Container, AlbumCover, TextBox } from "./styles";

export type Props = {
  song: Track;
};

export const Song = React.memo(({ song }: Props) => (
  <Container>
    <AlbumCover source={{ uri: song.artwork }} />
    <TextBox>
      <ThemedText type="title" style={{ textAlign: "center", fontSize: 26 }}>
        {song.title}
      </ThemedText>
      <ThemedText type="subtitle">{song.artist}</ThemedText>
    </TextBox>
  </Container>
));
