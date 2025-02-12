import { call, Effect } from "redux-saga/effects";

import { API_ENDPOINT } from "@/constants";
import { MOCK_SONGS } from "./mocks";

import { GetSongsApiPayload } from "./types";

export function* getSongs({
  term = "sensual",
}: GetSongsApiPayload): Generator<Effect, any, any> {
  // return yield call(
  //   fetch,
  //   `${API_ENDPOINT}?term=${term}&limit=1&media=music`,
  //   {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );

  // Return mock for the sake of quality images (demo only)
  return {
    json: () => {
      return {
        results: MOCK_SONGS,
      };
    },
  };
}
