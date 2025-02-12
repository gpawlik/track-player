import { combineReducers } from "@reduxjs/toolkit";
import { songs } from "./songs";
import { errors } from "./errors";

const combinedReducer = combineReducers({ songs, errors });

export type RootState = ReturnType<typeof combinedReducer>;

export const rootReducer = (state: RootState | undefined, action: any) => {
  return combinedReducer(state, action);
};
