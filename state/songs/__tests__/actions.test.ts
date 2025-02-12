import { getSongs, updateSongs, setPlayingTrackId } from "../actions";
import { GetSongsPayload, Song } from "../types";

describe("Redux Actions", () => {
  it("should create getSongs action with the correct payload", () => {
    const payload: GetSongsPayload = {
      term: "rock",
      onSuccess: jest.fn(),
      onError: jest.fn(),
    };
    const action = getSongs(payload);

    expect(action.type).toBe("songs/GET_SONGS");
    expect(action.payload).toEqual(payload);
  });

  it("should create updateSongs action with the correct payload", () => {
    const payload: Song[] = [
      { trackId: 1, trackName: "Song 1", trackTimeMillis: 300000 },
      { trackId: 2, trackName: "Song 2", trackTimeMillis: 250000 },
    ];
    const action = updateSongs(payload);

    expect(action.type).toBe("songs/UPDATE_SONGS");
    expect(action.payload).toEqual(payload);
  });

  it("should create setPlayingTrackId action with the correct payload", () => {
    const payload = 123;
    const action = setPlayingTrackId(payload);

    expect(action.type).toBe("songs/SET_PLAYING_TRACK_ID");
    expect(action.payload).toBe(payload);
  });
});
