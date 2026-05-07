export const cardTheme = {
  ratio: 5 / 7,
  size: {
    mini: {
      width: 42,
      height: 59
    },
    compact: {
      width: 64,
      height: 90
    },
    opponent: {
      width: 48,
      height: 67
    },
    full: {
      width: 96,
      height: 134
    }
  },
  previewSize: {
    width: 240,
    height: 336
  },
  radius: {
    mini: 5,
    compact: 8,
    opponent: 6,
    full: 12
  },
  borderWidth: {
    default: 1,
    selected: 3
  },
  stateColor: {
    selected: "#D6B05E",
    playable: "#3DDC97",
    invalid: "#E65F5C"
  },
  suitColor: {
    black: "#1D1B1B",
    red: "#C93434"
  },
  frameColor: {
    default: "rgba(29, 27, 27, 0.16)",
    rare: "#52A7FF",
    legendary: "#D6B05E"
  }
} as const;
