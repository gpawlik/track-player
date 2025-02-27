import * as React from "react";
import { ActivityIndicator, FlatList } from "react-native";
import TrackPlayer, {
  State as TrackPlayerState,
  usePlaybackState,
  Event,
} from "react-native-track-player";

import { getSongs, setPlayingTrackId } from "@/state/songs/actions";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { NoTracks } from "@/components/empty-tracks";
import { useDispatch, useSelector } from "react-redux";
import { Song } from "@/state/songs/types";
import {
  getPlayingTrackId,
  getPlaylistTitle,
  getSongs as getSongsSelector,
  getTrackPlayerSongs,
} from "@/state/songs/selectors";
import { TrackItem } from "@/components/track-item";
import { MiniPlayer } from "@/components/mini-player";

import { Subtitle, ParallaxImage } from "./styles";

export const Home = () => {
  const dispatch = useDispatch();
  const trackPlayerSongs = useSelector(getTrackPlayerSongs);
  const currentTrackIndex = useSelector(getPlayingTrackId);
  const playlistTitle = useSelector(getPlaylistTitle);

  const playbackState = usePlaybackState();

  const [isLoading, setIsLoading] = React.useState(false);
  const songs: Song[] = useSelector(getSongsSelector);

  const isPlaying = playbackState.state === TrackPlayerState.Playing;

  const onSuccess = () => setIsLoading(false);
  const onError = () => setIsLoading(false);

  React.useEffect(() => {
    if (trackPlayerSongs.length) {
      setupPlayer();
    } else {
      setIsLoading(true);
      dispatch(getSongs({ onSuccess, onError, term: "Fire" }));
    }
    return () => {
      TrackPlayer.reset();
    };
  }, [trackPlayerSongs?.length]);

  const setupPlayer = async () => {
    await TrackPlayer.reset();
    await TrackPlayer.add(trackPlayerSongs);

    if (currentTrackIndex) {
      await TrackPlayer.skip(currentTrackIndex);
    }
  };

  const onItemPress = React.useCallback(
    async (index: number) => {
      if (currentTrackIndex === index) {
        await togglePlayPause(playbackState.state);
        return;
      }
      await TrackPlayer.skip(index);
      await TrackPlayer.play();
    },
    [currentTrackIndex, playbackState.state]
  );

  const togglePlayPause = React.useCallback(
    async (state: any) => {
      if (state === TrackPlayerState.Playing) {
        await TrackPlayer.pause();
      } else {
        await TrackPlayer.play();
      }
    },
    [isPlaying]
  );

  React.useEffect(() => {
    const listener = TrackPlayer.addEventListener(
      Event.PlaybackActiveTrackChanged,
      async () => {
        const currentTrackIndex = await TrackPlayer.getActiveTrackIndex();
        dispatch(setPlayingTrackId(currentTrackIndex));
      }
    );

    return () => {
      listener.remove();
    };
  }, []);

  const buttonIcon = isPlaying ? "pause-circle" : "play-circle";

  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <ParallaxImage source={require("@/assets/images/cover.jpg")} />
        }
        headerButtonName={buttonIcon}
        onPressHeaderButton={() => togglePlayPause(playbackState.state)}
      >
        <Subtitle>{`${playlistTitle} (${songs.length} items)`}</Subtitle>

        {songs.length ? (
          <FlatList
            contentContainerStyle={{ paddingBottom: 40 }}
            data={songs}
            scrollEnabled={false}
            renderItem={({ item, index }) => {
              return (
                <TrackItem
                  song={item}
                  key={`${item.trackId}-${index}`}
                  onSongPress={() => onItemPress(index)}
                  isActive={currentTrackIndex === index}
                />
              );
            }}
          />
        ) : isLoading ? (
          <ActivityIndicator />
        ) : (
          <NoTracks />
        )}
      </ParallaxScrollView>
      <MiniPlayer />
    </>
  );
};
