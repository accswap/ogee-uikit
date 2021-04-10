import { Colors } from "./types";

export const baseColors = {
  failure: "#F33F67",
  primary: "#6868FF",
  primaryBright: "#53DEE9",
  primaryDark: "#6565F1",
  secondary: "#4344B5",
  success: "#29DCA2",
  warning: "#FFB237",
};

export const brandColors = {
  huobi: "#088DCA",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "radial-gradient(50% 50% at 50% 50%, rgba(89, 89, 244, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
  backgroundDisabled: "#E5EAEF",
  contrast: "#16181D",
  invertedContrast: "#F7F7FD",
  input: "#F1F1FB",
  inputSecondary: "#CACAF1",
  tertiary: "#EEEEF5",
  text: "#262636",
  textDisabled: "#BDC2C4",
  textSubtle: "#646490",
  borderColor: "#E9EAEB",
  card: "rgba(255, 255, 255, 0.9)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #F6F6FF 0%,#DDDDFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#7878FF",
  background: "radial-gradient(50% 50% at 50% 50%, rgba(24, 25, 34, 0.95) 0%, rgba(24, 25, 34, 1) 100%)",
  backgroundDisabled: "#454756",
  contrast: "#FEFEFF",
  invertedContrast: "#1F212B",
  input: "#303240",
  inputSecondary: "#505096",
  primaryDark: "#6565F1",
  tertiary: "#2C2F3B",
  text: "#F2F2FF",
  textDisabled: "#606271",
  textSubtle: "#9797CC",
  borderColor: "#33373C",
  card: "rgba(34, 37, 47, 0.9)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #33333F 0%, #44447A 100%)",
  },
};
