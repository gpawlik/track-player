import { songs } from "../";
import { updateSongs, setPlayingTrackId } from "../actions";
import { SongsState, Song } from "../types";

describe("songs reducer", () => {
  const initialState: SongsState = {
    songs: [],
    playingTrackId: 0,
    playlistTitle: "Liked songs",
  };

  it("should return the initial state when an unknown action is provided", () => {
    expect(songs(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle updateSongs action", () => {
    const newSongs: Song[] = [
      { trackId: 1, trackName: "Song 1", trackTimeMillis: 300000 },
      { trackId: 2, trackName: "Song 2", trackTimeMillis: 250000 },
    ];

    const newState = songs(initialState, updateSongs(newSongs));

    expect(newState.songs).toEqual(newSongs);
  });

  it("should handle setPlayingTrackId action", () => {
    const newTrackId = 123;

    const newState = songs(initialState, setPlayingTrackId(newTrackId));

    expect(newState.playingTrackId).toBe(newTrackId);
  });
});
