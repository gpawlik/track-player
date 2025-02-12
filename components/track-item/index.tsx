import * as React from "react";
import { Song } from "@/state/songs/types";
import { msToHMS } from "@/utils/time";

import {
  Container,
  AlbumCover,
  FlexCol,
  Gradient,
  ShadowContainer,
  TitleBox,
} from "./styles";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { PlayingIcon } from "@/components/playing-icon";

export type Props = {
  song: Song;
  onSongPress?: () => void;
  isActive?: boolean;
};

export const TrackItem = React.memo(
  ({ song, onSongPress, isActive }: Props) => {
    const formattedLength =
      song.trackTimeMillis && msToHMS(song.trackTimeMillis);

    return (
      <ShadowContainer>
        <Gradient colors={Colors.light.gradient} start={{ x: 0.3, y: 0.1 }}>
          <Container onPress={onSongPress}>
            <AlbumCover source={{ uri: song.artworkUrl100 }} />
            <FlexCol>
              <TitleBox>
                {isActive ? <PlayingIcon /> : null}

                <ThemedText type="subtitle" numberOfLines={1}>
                  {song.trackName}
                </ThemedText>
              </TitleBox>
              <ThemedText
                type="small"
                numberOfLines={1}
              >{`${song.artistName} · ${song.primaryGenreName}`}</ThemedText>
              <ThemedText type="small">{formattedLength}</ThemedText>
            </FlexCol>
          </Container>
        </Gradient>
      </ShadowContainer>
    );
  }
);
