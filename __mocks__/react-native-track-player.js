export const usePlaybackState = jest.fn(() => ({
  state: "idle", // Mock an initial state
}));

export const State = {
  Playing: "playing",
  Paused: "paused",
  Stopped: "stopped",
};

export const useProgress = jest.fn(() => ({
  position: 0,
  duration: 0,
}));

export default {
  setupPlayer: jest.fn(),
  add: jest.fn(),
  play: jest.fn(),
  pause: jest.fn(),
  stop: jest.fn(),
  seekTo: jest.fn(),
  getState: jest.fn(() => Promise.resolve("stopped")),
};
