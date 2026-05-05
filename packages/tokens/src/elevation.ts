export const elevation = {
  none: "none",

  sm: "0 1px 2px rgba(0, 0, 0, 0.18)",

  md: [
    "0 8px 24px rgba(0, 0, 0, 0.20)",
    "0 2px 8px rgba(0, 0, 0, 0.12)"
  ].join(", "),

  lg: [
    "0 16px 40px rgba(0, 0, 0, 0.24)",
    "0 4px 12px rgba(0, 0, 0, 0.16)"
  ].join(", "),

  glowGold: "0 0 32px rgba(212, 175, 106, 0.28)",

  glowWater: "0 0 32px rgba(0, 175, 255, 0.32)"
} as const;