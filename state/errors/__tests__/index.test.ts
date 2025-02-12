import { errors } from "@/state/errors";
import { setError, clearError } from "@/state/errors/actions";
import { initialState } from "@/state/errors/constants";

describe("errors reducer", () => {
  it("should return the initial state when given an undefined state", () => {
    expect(errors(undefined, { type: "" })).toEqual(initialState);
  });

  it("should handle setError and update the state with an error message", () => {
    const errorMessage = "Something went wrong";
    const action = setError(errorMessage);

    const expectedState = {
      ...initialState,
      message: errorMessage,
    };

    expect(errors(initialState, action)).toEqual(expectedState);
  });

  it("should handle clearError and reset the message to null", () => {
    const stateWithError = { ...initialState, message: "Existing error" };
    const action = clearError();

    const expectedState = {
      ...initialState,
      message: null,
    };

    expect(errors(stateWithError, action)).toEqual(expectedState);
  });
});
