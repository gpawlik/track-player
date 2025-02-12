import { createReducer } from "@reduxjs/toolkit";
import { setError, clearError } from "./actions";
import { initialState } from "./constants";

export const errors = createReducer(initialState, (builder) => {
  builder
    .addCase(setError, (state, action) => {
      state.message = action.payload;
    })
    .addCase(clearError, (state) => {
      state.message = null;
    });
});
