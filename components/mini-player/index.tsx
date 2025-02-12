import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { router } from "expo-router";
import TrackPlayer, {
  State as TrackPlayerState,
  useActiveTrack,
  usePlaybackState,
} from "react-native-track-player";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { PlayButton } from "@/components/play-button";

import {
  Container,
  TrackImage,
  SongInfo,
  SongTitle,
  ArtistName,
  ButtonBox,
} from "./styles";

export const MiniPlayer = () => {
  const { state } = usePlaybackState();
  const translateY = useRef(new Animated.Value(200)).current;

  const activeTrack = useActiveTrack();
  const { bottom } = useSafeAreaInsets();

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: !!activeTrack ? 0 : 200,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [activeTrack]);

  const togglePlayback = async () => {
    if (state === TrackPlayerState.Playing) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  };

  const onSongPress = () => {
    router.navigate("/modal");
  };

  if (!activeTrack) {
    return null;
  }

  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Container bottomSpacing={bottom}>
        <TrackImage source={{ uri: activeTrack.artwork }} />
        <SongInfo onPress={onSongPress}>
          <SongTitle numberOfLines={1}>{activeTrack.title}</SongTitle>
          <ArtistName numberOfLines={1}>{activeTrack.artist}</ArtistName>
        </SongInfo>
        <ButtonBox>
          <PlayButton state={state} size={28} onPress={togglePlayback} />
        </ButtonBox>
      </Container>
    </Animated.View>
  );
};
