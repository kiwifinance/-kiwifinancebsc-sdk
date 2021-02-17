import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#80CC33",
  primaryBright: "#4BCC33",
  primaryDark: "#57a50a",
  secondary: "#9E6F41",
  success: "#31D087",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#ECEBEA",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#ECDFD6",
  tertiary: "#EFF4F5",
  text: "#634A31",
  textDisabled: "#CCC4BE",
  textSubtle: "#A67341",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9e6f41",
  background: "#222120",
  backgroundDisabled: "#38322D",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#585149",
  primaryDark: "#0098A1",
  tertiary: "#383532",
  text: "#F1D2B0",
  textDisabled: "#6F655A",
  textSubtle: "#D4A777",
  borderColor: "#383532",
  card: "#2c2a28",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
