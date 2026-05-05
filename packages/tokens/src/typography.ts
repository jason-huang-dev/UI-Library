export const typography = {
  fontFamily: {
    sans: [
      "Inter",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      `"Segoe UI"`,
      "sans-serif"
    ].join(", "),

    serif: [
      "Cinzel",
      "Cormorant Garamond",
      "Georgia",
      "serif"
    ].join(", "),

    mono: [
      `"SFMono-Regular"`,
      "Consolas",
      `"Liberation Mono"`,
      "Menlo",
      "monospace"
    ].join(", ")
  },

  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem"
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },

  lineHeight: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.65
  },

  letterSpacing: {
    tighter: "-0.04em",
    tight: "-0.02em",
    normal: "0em",
    wide: "0.04em",
    wider: "0.08em",
    widest: "0.16em",
    brand: "0.22em"
  },

  textStyles: {
    display: {
      fontFamily: "serif",
      fontSize: "3.75rem",
      fontWeight: "semibold",
      lineHeight: "tight",
      letterSpacing: "wide"
    },

    h1: {
      fontFamily: "serif",
      fontSize: "3rem",
      fontWeight: "semibold",
      lineHeight: "tight",
      letterSpacing: "wide"
    },

    h2: {
      fontFamily: "serif",
      fontSize: "2.25rem",
      fontWeight: "semibold",
      lineHeight: "snug",
      letterSpacing: "wide"
    },

    h3: {
      fontFamily: "serif",
      fontSize: "1.875rem",
      fontWeight: "semibold",
      lineHeight: "snug",
      letterSpacing: "wide"
    },

    h4: {
      fontFamily: "serif",
      fontSize: "1.5rem",
      fontWeight: "semibold",
      lineHeight: "snug",
      letterSpacing: "wide"
    },

    body: {
      fontFamily: "sans",
      fontSize: "1rem",
      fontWeight: "regular",
      lineHeight: "relaxed",
      letterSpacing: "normal"
    },

    bodySm: {
      fontFamily: "sans",
      fontSize: "0.875rem",
      fontWeight: "regular",
      lineHeight: "normal",
      letterSpacing: "normal"
    },

    label: {
      fontFamily: "sans",
      fontSize: "0.875rem",
      fontWeight: "medium",
      lineHeight: "normal",
      letterSpacing: "wide"
    },

    button: {
      fontFamily: "sans",
      fontSize: "0.875rem",
      fontWeight: "semibold",
      lineHeight: "normal",
      letterSpacing: "wider"
    },

    caption: {
      fontFamily: "sans",
      fontSize: "0.75rem",
      fontWeight: "regular",
      lineHeight: "normal",
      letterSpacing: "wide"
    },

    overline: {
      fontFamily: "serif",
      fontSize: "0.75rem",
      fontWeight: "semibold",
      lineHeight: "normal",
      letterSpacing: "brand",
      textTransform: "uppercase"
    },

    code: {
      fontFamily: "mono",
      fontSize: "0.875rem",
      fontWeight: "regular",
      lineHeight: "normal",
      letterSpacing: "normal"
    }
  }
} as const;