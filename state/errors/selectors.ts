import { createSelector } from "reselect";
import { RootState } from "../reducers";
import { initialState } from "./constants";

export const getState = (state: RootState) => state.errors || initialState;

export const getErrorMessage = createSelector(
  getState,
  (state) => state.message || initialState.message
);
