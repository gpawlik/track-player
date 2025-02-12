import { takeLatest, call, put, Effect } from "redux-saga/effects";

import { setError } from "@/state/errors/actions";

import { getSongs, updateSongs } from "./actions";
import { GetSongsAction, Song } from "./types";
import * as api from "./api";

export function* getSongsSaga({
  payload: { onSuccess = () => {}, onError = () => {}, term },
}: GetSongsAction): Generator<Effect, any, any> {
  try {
    const response = yield call(api.getSongs, { term });
    const result = yield call(() => response.json());

    const songs = result.results?.filter(
      (result: Song) => !!result.trackId && !!result.trackTimeMillis
    );

    if (songs && Array.isArray(songs)) {
      yield put(updateSongs(songs));
      yield call(onSuccess);
    } else {
      throw new Error();
    }
  } catch (e) {
    yield put(setError("Tracks failed to load!"));
    yield call(onError);
  }
}

export function* watchGetSongs() {
  yield takeLatest(getSongs.type, getSongsSaga);
}
