import * as React from "react";
import { ActivityIndicator, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { State } from "react-native-track-player";

import { LoadingBox } from "./styles";

interface Props {
  state?: State;
  size?: number;
  isCircle?: boolean;
  color?: string;
  onPress: () => void;
}

export const PlayButton = ({
  state,
  size = 28,
  isCircle,
  color = "white",
  onPress,
}: Props) => {
  const isPlaying = state === State.Playing;
  const isLoading = [State.Buffering, State.Loading].includes(state as State);

  const nameRegular = isPlaying ? "pause" : "play";
  const nameCircle = isPlaying ? "pause-circle" : "play-circle";
  const indicatorSize = size < 30 ? "small" : "large";
  const name = isCircle ? nameCircle : nameRegular;

  if (isLoading) {
    return (
      <LoadingBox size={size}>
        <ActivityIndicator color="white" size={indicatorSize} />
      </LoadingBox>
    );
  }

  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
};
