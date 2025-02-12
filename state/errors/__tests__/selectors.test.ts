import { getErrorMessage } from "@/state/errors/selectors";
import { initialState } from "@/state/errors/constants";
import { RootState } from "@/state/reducers";

describe("errors selectors", () => {
  it("should return the error message when there is an error", () => {
    const mockState: RootState = {
      errors: { message: "Something went wrong" },
    } as RootState;

    expect(getErrorMessage(mockState)).toEqual("Something went wrong");
  });

  it("should return null when there is no error", () => {
    const mockState: RootState = {
      errors: { message: null },
    } as RootState;

    expect(getErrorMessage(mockState)).toBeNull();
  });

  it("should return the default state message when errors state is undefined", () => {
    const mockState = {} as RootState; // Simulating an undefined errors state

    expect(getErrorMessage(mockState)).toEqual(initialState.message);
  });
});
