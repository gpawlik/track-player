import { createSelector } from "reselect";
import { RootState } from "../reducers";
import { initialState } from "./constants";

export const getState = (state: RootState) => state.songs || initialState;

export const getSongs = createSelector(
  getState,
  (state) => state.songs || initialState.songs
);

export const getPlaylistTitle = createSelector(
  getState,
  (state) => state.playlistTitle || initialState.playlistTitle
);

export const getSongsLength = createSelector(getSongs, (songs) => songs.length);

export const getPlayingTrackId = createSelector(
  getState,
  (state) => state.playingTrackId || initialState.playingTrackId
);

export const getTrackPlayerSongs = createSelector(getSongs, (songs) =>
  songs.map((song) => {
    return {
      id: song.trackId || 0,
      url: song.previewUrl || "",
      title: song.trackName || "",
      artist: song.artistName || "",
      artwork: song.artworkUrl100 || "",
    };
  })
);
