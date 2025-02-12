import {
  getSongs,
  getSongsLength,
  getPlayingTrackId,
  getTrackPlayerSongs,
  getPlaylistTitle,
} from "../selectors";

describe("selectors", () => {
  const mockState = {
    errors: { message: null },
    songs: {
      songs: [
        {
          trackId: 1,
          trackName: "Song 1",
          artistName: "Artist 1",
          previewUrl: "url1",
          artworkUrl100: "url1-artwork",
        },
        {
          trackId: 2,
          trackName: "Song 2",
          artistName: "Artist 2",
          previewUrl: "url2",
          artworkUrl100: "url2-artwork",
        },
        {
          trackId: 3,
          trackName: "Song 3",
          artistName: "Artist 3",
          previewUrl: "url3",
          artworkUrl100: "url3-artwork",
        },
      ],
      playingTrackId: 2,
      playlistTitle: "",
    },
  };

  it("should return the songs state", () => {
    const result = getSongs(mockState);
    expect(result).toEqual(mockState.songs.songs);
  });

  it("should return the correct songs length", () => {
    const result = getSongsLength(mockState);
    expect(result).toBe(3); // There are 3 songs in the mock state
  });

  it("should return the correct playingTrackId", () => {
    const result = getPlayingTrackId(mockState);
    expect(result).toBe(2); // The playing track ID is 2
  });

  it("should return the track player songs", () => {
    const result = getTrackPlayerSongs(mockState);
    expect(result).toEqual([
      {
        id: 1,
        url: "url1",
        title: "Song 1",
        artist: "Artist 1",
        artwork: "url1-artwork",
      },
      {
        id: 2,
        url: "url2",
        title: "Song 2",
        artist: "Artist 2",
        artwork: "url2-artwork",
      },
      {
        id: 3,
        url: "url3",
        title: "Song 3",
        artist: "Artist 3",
        artwork: "url3-artwork",
      },
    ]);
  });
});
