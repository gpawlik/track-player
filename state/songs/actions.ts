import { createAction } from "@reduxjs/toolkit";
import { GetSongsPayload, Song } from "./types";

export const getSongs = createAction<GetSongsPayload>("songs/GET_SONGS");
export const updateSongs = createAction<Song[]>("songs/UPDATE_SONGS");
export const setPlayingTrackId = createAction<number | undefined>(
  "songs/SET_PLAYING_TRACK_ID"
);
