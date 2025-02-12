import * as React from "react";
import LottieView from "lottie-react-native";
import {
  usePlaybackState,
  State as TrackPlayerState,
} from "react-native-track-player";

export const PlayingIcon = () => {
  const animation = React.useRef<LottieView>(null);
  const playbackState = usePlaybackState();

  React.useEffect(() => {
    if (playbackState.state === TrackPlayerState.Playing) {
      animation.current?.play();
    } else {
      animation.current?.pause();
    }
  }, [playbackState.state]);

  return (
    <LottieView
      autoPlay
      ref={animation}
      style={{
        width: 20,
        height: 20,
        backgroundColor: "#fff",
        marginBottom: 5,
        marginRight: 5,
      }}
      source={require("./animation.json")}
    />
  );
};
