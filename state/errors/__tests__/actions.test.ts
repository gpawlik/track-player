import { setError, clearError } from "@/state/errors/actions";

describe("Error Actions", () => {
  it("should create setError action with the correct payload", () => {
    const errorMessage = "Something went wrong";
    const expectedAction = {
      type: "errors/SET",
      payload: errorMessage,
    };

    expect(setError(errorMessage)).toEqual(expectedAction);
  });

  it("should create clearError action without a payload", () => {
    const expectedAction = {
      type: "errors/REMOVE",
    };

    expect(clearError()).toEqual(expectedAction);
  });
});
