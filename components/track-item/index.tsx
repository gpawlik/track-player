import * as React from "react";

import { Song } from "@/state/songs/types";
import { msToHMS } from "@/utils/time";
import { gradient } from "@/styles/theme";
import { PlayingIcon } from "@/components/playing-icon";

import {
  Container,
  AlbumCover,
  FlexCol,
  Gradient,
  ShadowContainer,
  TitleBox,
  Subtitle,
  Artist,
  TimeText,
} from "./styles";

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
        <Gradient colors={gradient} start={{ x: 0.3, y: 0.1 }}>
          <Container onPress={onSongPress}>
            <AlbumCover source={{ uri: song.artworkUrl100 }} />
            <FlexCol>
              <TitleBox>
                {isActive ? <PlayingIcon /> : null}

                <Subtitle numberOfLines={1}>{song.trackName}</Subtitle>
              </TitleBox>
              <Artist
                numberOfLines={1}
              >{`${song.artistName} · ${song.primaryGenreName}`}</Artist>
              <TimeText>{formattedLength}</TimeText>
            </FlexCol>
          </Container>
        </Gradient>
      </ShadowContainer>
    );
  }
);
