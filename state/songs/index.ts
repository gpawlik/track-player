import { createReducer } from "@reduxjs/toolkit";
import { updateSongs, setPlayingTrackId } from "./actions";
import { initialState } from "./constants";

export const songs = createReducer(initialState, (builder) => {
  builder
    .addCase(updateSongs, (state, action) => {
      state.songs = action.payload;
      state.playingTrackId = null;
    })
    .addCase(setPlayingTrackId, (state, action) => {
      state.playingTrackId = action.payload || 0;
    });
});
