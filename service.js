import TrackPlayer, { Event, State } from "react-native-track-player";
import AsyncStorage from "@react-native-async-storage/async-storage";

module.exports = async function () {
  TrackPlayer.addEventListener(Event.RemotePlay, async () => {
    await TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemotePause, async () => {
    await TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemoteNext, async () => {
    await TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, async () => {
    await TrackPlayer.skipToPrevious();
  });

  TrackPlayer.addEventListener(Event.PlaybackQueueEnded, async () => {
    await TrackPlayer.stop();
  });

  TrackPlayer.addEventListener(Event.PlaybackState, async (data) => {
    const state = await TrackPlayer.getPlaybackState();
    if (state === State.Paused || state === State.Stopped) {
      await AsyncStorage.setItem("lastPlaybackState", state.toString());
    }
  });
};
