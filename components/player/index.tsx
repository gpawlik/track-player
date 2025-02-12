import React from "react";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TrackPlayer, {
  usePlaybackState,
  useActiveTrack,
  State as PlaybackState,
  Event,
} from "react-native-track-player";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
  State,
} from "react-native-gesture-handler";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { getPlaylistTitle } from "@/state/songs/selectors";
import { Song } from "@/components/song";
import { Colors } from "@/constants/Colors";
import { GradientSlider } from "@/components/gradient-slider";
import { PlayButton } from "@/components/play-button";

import {
  Container,
  ActionButton,
  RowContainer,
  PlayerContainer,
  AnimatedContainer,
  HeaderBox,
  HeaderTitle,
  HeaderIcon,
} from "./styles";

export const PlayerComponent = React.memo(() => {
  const playlistTitle = useSelector(getPlaylistTitle);
  const { state } = usePlaybackState();
  const { top } = useSafeAreaInsets();
  const activeTrack = useActiveTrack();
  const theme = useTheme();

  const isAndroid = Platform.OS === "android";
  const isPlaying = state === PlaybackState.Playing;
  const translateX = useSharedValue(0);

  const [isFirstTrack, setIsFirstTrack] = React.useState(false);
  const [isLastTrack, setIsLastTrack] = React.useState(false);

  React.useEffect(() => {
    const updateTrackPosition = async () => {
      const queue = await TrackPlayer.getQueue();
      const activeTrackIndex = await TrackPlayer.getActiveTrackIndex();

      if (queue.length > 0) {
        setIsFirstTrack(activeTrackIndex === 0);
        setIsLastTrack(queue.length - 1 === activeTrackIndex);
      }
    };

    updateTrackPosition();

    const listener = TrackPlayer.addEventListener(
      Event.PlaybackActiveTrackChanged,
      updateTrackPosition
    );

    return () => listener.remove();
  }, []);

  const onSwipeNext = async () => {
    await TrackPlayer.skipToNext();
  };

  const onSwipePrev = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const togglePlayPause = React.useCallback(async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  }, [isPlaying]);

  const onSwipe = ({
    nativeEvent,
  }: GestureEvent<PanGestureHandlerEventPayload>) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationX < -50) {
        onSwipeNext();
      } else if (nativeEvent.translationX > 50) {
        onSwipePrev();
      }
      translateX.value = withSpring(0);
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const topPadding = isAndroid ? top : 0;
  const headerIcon = isAndroid ? "close" : "chevron-down";

  const renderContent = () => {
    return (
      <Container>
        <HeaderBox topPadding={topPadding}>
          <HeaderIcon onPress={router.back}>
            <Ionicons name={headerIcon} size={22} color={theme.colors.black} />
          </HeaderIcon>
          <HeaderTitle>{playlistTitle}</HeaderTitle>
          <HeaderIcon />
        </HeaderBox>

        <PlayerContainer>
          <AnimatedContainer style={animatedStyle}>
            {activeTrack ? <Song song={activeTrack} /> : null}
          </AnimatedContainer>
          <GradientSlider />
          <RowContainer
            colors={Colors.light.gradient}
            start={{ x: 0.3, y: 0.1 }}
          >
            <ActionButton onPress={onSwipePrev} isDisabled={isFirstTrack}>
              <Ionicons
                name="play-skip-back"
                color={theme.colors.white}
                size={30}
              />
            </ActionButton>

            <PlayButton
              state={state}
              onPress={togglePlayPause}
              isCircle
              color={theme.colors.white}
              size={60}
            />

            <ActionButton onPress={onSwipeNext} isDisabled={isLastTrack}>
              <Ionicons
                name="play-skip-forward"
                color={theme.colors.white}
                size={30}
              />
            </ActionButton>
          </RowContainer>
        </PlayerContainer>
      </Container>
    );
  };

  if (isAndroid) {
    return <>{renderContent()}</>;
  }

  return (
    <PanGestureHandler onHandlerStateChange={onSwipe}>
      {renderContent()}
    </PanGestureHandler>
  );
});
