import { SongKeyType, SongsState } from "./types";

export const initialState: SongsState = {
  songs: [],
  playingTrackId: 0,
  playlistTitle: "Liked songs",
};

export const songKeyMap: Map<string, SongKeyType> = new Map([
  ["Duration", "trackTimeMillis"],
  ["Genre", "primaryGenreName"],
  ["Price", "trackPrice"],
]);
