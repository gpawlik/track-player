import * as React from "react";
import { Colors } from "@/constants/Colors";
import { Animated, Easing } from "react-native";
import TrackPlayer, {
  State as TrackPlayerState,
  useProgress,
  usePlaybackState,
} from "react-native-track-player";

import {
  Container,
  GradientFill,
  GradientTrack,
  SliderContainer,
  StyledSlider,
} from "./styles";
import { formatTime } from "@/utils/time";
import { ThemedText } from "@/components/ThemedText";

const MAX_DURATION = 100;

export const GradientSlider = () => {
  const [isPaused, setIsPaused] = React.useState(false);
  const { duration, position } = useProgress(100);

  const playbackState = usePlaybackState();
  const animatedValue = React.useRef(new Animated.Value(position)).current;

  const onSlidingStart = React.useCallback(async () => {
    if (playbackState.state === TrackPlayerState.Playing) {
      await TrackPlayer.pause();
      setIsPaused(true);
    }
  }, [playbackState, setIsPaused]);

  const onSlidingComplete = React.useCallback(
    async (seconds: number) => {
      await TrackPlayer.seekTo(seconds);
      if (isPaused) {
        await TrackPlayer.play();
        setIsPaused(false);
      }
    },
    [isPaused, setIsPaused]
  );

  const onValueChange = (value: number) => {
    animatedValue.setValue(value);
  };

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: position,
      duration: MAX_DURATION,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [position]);

  return (
    <Container>
      <ThemedText type="small">{formatTime(position)}</ThemedText>
      <SliderContainer>
        <GradientTrack
          style={{
            width: animatedValue.interpolate({
              inputRange: [0, duration || MAX_DURATION],
              outputRange: ["0%", "100%"],
              extrapolate: "clamp",
            }),
          }}
        >
          <GradientFill
            colors={Colors.light.gradient}
            start={{ x: 0.2, y: 0.1 }}
          />
        </GradientTrack>

        <StyledSlider
          minimumValue={0}
          maximumValue={duration}
          value={position}
          onValueChange={onValueChange}
          onSlidingComplete={onSlidingComplete}
          onSlidingStart={onSlidingStart}
          minimumTrackTintColor="transparent"
          thumbTintColor="white"
        />
      </SliderContainer>
      <ThemedText type="small">{formatTime(duration)}</ThemedText>
    </Container>
  );
};
