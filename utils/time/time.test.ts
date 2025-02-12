import { msToHMS, formatDate, formatTime } from "./";

describe("msToHMS", () => {
  it("should convert milliseconds to HH:MM:SS format", () => {
    expect(msToHMS(60000)).toBe("1:00"); // 1 minute
    expect(msToHMS(61000)).toBe("1:01"); // 1 minute, 1 sec
    expect(msToHMS(0)).toBe("0:00"); // Edge case: zero milliseconds
  });
});

describe("formatDate", () => {
  it("should format date correctly as DD/MM/YYYY", () => {
    expect(formatDate("2024-02-05T10:00:00Z")).toBe("5/2/2024");
  });

  it("should handle invalid dates gracefully", () => {
    expect(formatDate("")).toBe("NaN/NaN/NaN"); // Edge case: empty string
    expect(formatDate("invalid-date")).toBe("NaN/NaN/NaN"); // Edge case: invalid string
  });
});

describe("formatTime", () => {
  it("should format seconds into MM:SS", () => {
    expect(formatTime(65)).toBe("1:05"); // 1 min, 5 sec
    expect(formatTime(125)).toBe("2:05"); // 2 min, 5 sec
    expect(formatTime(9)).toBe("0:09"); // Less than 10 sec
    expect(formatTime(0)).toBe("0:00"); // Edge case: zero seconds
  });
});
