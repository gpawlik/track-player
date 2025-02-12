import * as React from "react";
import LottieView from "lottie-react-native";
import {
  usePlaybackState,
  State as TrackPlayerState,
} from "react-native-track-player";
import { useTheme } from "styled-components/native";

export const PlayingIcon = () => {
  const animation = React.useRef<LottieView>(null);
  const playbackState = usePlaybackState();
  const theme = useTheme();

  React.useEffect(() => {
    if (playbackState.state === TrackPlayerState.Playing) {
      animation.current?.play();
    } else {
      animation.current?.pause();
    }
  }, [playbackState.state]);

  return (
    <LottieView
      autoPlay={false}
      ref={animation}
      style={{
        width: 20,
        height: 20,
        backgroundColor: theme.colors.white,
        marginBottom: 5,
        marginRight: 5,
      }}
      source={require("./animation.json")}
    />
  );
};
