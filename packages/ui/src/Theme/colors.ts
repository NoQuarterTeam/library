export interface ColorScale {
  "50": string
  "100": string
  "200": string
  "300": string
  "400": string
  "500": string
  "600": string
  "700": string
  "800": string
  "900": string
  [key: number]: string
}

export interface Colors {
  [key: string]: string | ColorScale
  transparent: string
  background: string
  primary: string
  secondary: string
  tertiary: string
  shadow: string
  text: string
  warning: string
  tile: string
  black: string
  white: string

  whiteAlpha: ColorScale
  blackAlpha: ColorScale
  gray: ColorScale
  pink: ColorScale
  red: ColorScale
  orange: ColorScale
  yellow: ColorScale
  green: ColorScale
  teal: ColorScale
  blue: ColorScale
  cyan: ColorScale
  purple: ColorScale
}

export const colors: Colors = {
  transparent: "transparent",
  background: "#f8f9fd",
  primary: "#F35680",
  secondary: "#0085ff",
  tertiary: "#afb2cb",
  shadow: "rgba(255, 255, 255, 0.04)",
  text: "#1b2d41",
  warning: "#F35680",
  tile: "#fff",
  black: "#000",
  white: "#fff",

  whiteAlpha: {
    "50": "rgba(255, 255, 255, 0.04)",
    "100": "rgba(255, 255, 255, 0.06)",
    "200": "rgba(255, 255, 255, 0.08)",
    "300": "rgba(255, 255, 255, 0.16)",
    "400": "rgba(255, 255, 255, 0.24)",
    "500": "rgba(255, 255, 255, 0.36)",
    "600": "rgba(255, 255, 255, 0.48)",
    "700": "rgba(255, 255, 255, 0.64)",
    "800": "rgba(255, 255, 255, 0.80)",
    "900": "rgba(255, 255, 255, 0.92)",
  },

  blackAlpha: {
    "50": "rgba(0, 0, 0, 0.04)",
    "100": "rgba(0, 0, 0, 0.06)",
    "200": "rgba(0, 0, 0, 0.08)",
    "300": "rgba(0, 0, 0, 0.16)",
    "400": "rgba(0, 0, 0, 0.24)",
    "500": "rgba(0, 0, 0, 0.36)",
    "600": "rgba(0, 0, 0, 0.48)",
    "700": "rgba(0, 0, 0, 0.64)",
    "800": "rgba(0, 0, 0, 0.80)",
    "900": "rgba(0, 0, 0, 0.92)",
  },

  gray: {
    "50": "#f2f4f7",
    "100": "#EDF2F5",
    "200": "#E2E8F1",
    "300": "#CBD5E1",
    "400": "#A0AEC1",
    "500": "#718098",
    "600": "#4A556C",
    "700": "#2D374C",
    "800": "#1A202F",
    "900": "#171929",
  },
  pink: {
    "50": "#fdecf1",
    "100": "#fcd8e2",
    "200": "#fac1d1",
    "300": "#f8a7be",
    "400": "#f685a5",
    "500": "#f35682",
    "600": "#db4d75",
    "700": "#c04466",
    "800": "#9f3855",
    "900": "#72283d",
  },
  red: {
    "50": "#fff5f5",
    "100": "#fed7d7",
    "200": "#feb2b2",
    "300": "#fc8181",
    "400": "#f56565",
    "500": "#e53e3e",
    "600": "#c53030",
    "700": "#9b2c2c",
    "800": "#822727",
    "900": "#63171b",
  },

  orange: {
    "50": "#FFFAF0",
    "100": "#FEEBC8",
    "200": "#FBD38D",
    "300": "#F6AD55",
    "400": "#ED8936",
    "500": "#DD6B20",
    "600": "#C05621",
    "700": "#9C4221",
    "800": "#7B341E",
    "900": "#652B19",
  },

  yellow: {
    "50": "#fffff0",
    "100": "#fefcbf",
    "200": "#faf089",
    "300": "#f6e05e",
    "400": "#ecc94b",
    "500": "#d69e2e",
    "600": "#b7791f",
    "700": "#975a16",
    "800": "#744210",
    "900": "#5F370E",
  },

  green: {
    "50": "#f0fff4",
    "100": "#c6f6d5",
    "200": "#9ae6b4",
    "300": "#68d391",
    "400": "#48bb78",
    "500": "#38a169",
    "600": "#2f855a",
    "700": "#276749",
    "800": "#22543d",
    "900": "#1C4532",
  },

  teal: {
    "50": "#E6FFFA",
    "100": "#B2F5EA",
    "200": "#81E6D9",
    "300": "#4FD1C5",
    "400": "#38B2AC",
    "500": "#319795",
    "600": "#2C7A7B",
    "700": "#285E61",
    "800": "#234E52",
    "900": "#1D4044",
  },

  blue: {
    "50": "#ebf8ff",
    "100": "#ceedff",
    "200": "#90cdf4",
    "300": "#63b3ed",
    "400": "#4299e1",
    "500": "#3182ce",
    "600": "#2a69ac",
    "700": "#1e4e8c",
    "800": "#153e75",
    "900": "#1a365d",
  },

  cyan: {
    "50": "#EDFDFD",
    "100": "#C4F1F9",
    "200": "#9DECF9",
    "300": "#76E4F7",
    "400": "#0BC5EA",
    "500": "#00B5D8",
    "600": "#00A3C4",
    "700": "#0987A0",
    "800": "#086F83",
    "900": "#065666",
  },

  purple: {
    "50": "#faf5ff",
    "100": "#e9d8fd",
    "200": "#d6bcfa",
    "300": "#b794f4",
    "400": "#9f7aea",
    "500": "#805ad5",
    "600": "#6b46c1",
    "700": "#553c9a",
    "800": "#44337a",
    "900": "#322659",
  },
}
