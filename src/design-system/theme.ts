import { colors } from "./colors";

export const fontName = "Inter";
export const headingFontName = "ClashDisplay";

export const defaultTheme = {
  colors,
  space: {
    $4xs: 1,
    $3xs: 2,
    $2xs: 4,
    $xs: 8,
    $s: 12,
    $m: 16,
    $mm: 18,
    $ml: 20,
    $l: 24,
    $xl: 28,
    $2xl: 32,
    $3xl: 40,
    $4xl: 48,
    $5xl: 56,
  },
  fontSizes: {
    $0: 10,
    $1: 11,
    $2: 12,
    $2_5: 13,
    $3: 15,
    $4: 17,
    $5: 18,
    $6: 20,
    $6_5: 24,
    $7: 28,
    $8: 34,
    $9: 40,
  },
  customFonts: {
    [fontName]: {
      "100": `${fontName}-Thin`,
      "200": `${fontName}-Extra-Light`,
      "300": `${fontName}-Light`,
      "400": `${fontName}-Regular`,
      "500": `${fontName}-Medium`,
      "600": `${fontName}-SemiBold`,
      "700": `${fontName}-Bold`,
      "800": `${fontName}-ExtraBold`,
      "900": `${fontName}-Black`,
    },
    [headingFontName]: {
      "200": `${headingFontName}-Extra-Light`,
      "300": `${headingFontName}-Light`,
      "400": `${headingFontName}-Regular`,
      "500": `${headingFontName}-Medium`,
      "600": `${headingFontName}-SemiBold`,
      "700": `${headingFontName}-Bold`,
    },
  },
  fonts: {
    root: fontName,
    heading: headingFontName,
  },
  fontWeight: {
    thin: "100",
    extraLight: "200",
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    black: "900",
  },
  button: {
    primary: "primary",
  },
  text: {
    body: {
      // this sets defaults for all <Text> components
      color: "$black",
    },
    h1: {
      fontSize: "$8",
      fontWeight: "semibold",
      lineHeight: 41,
      fontFamily: "heading",
    },
    h2: {
      fontSize: "$7",
      fontWeight: "medium",
      lineHeight: 32,
      fontFamily: "heading",
    },
    h3: {
      fontSize: "$6",
      fontWeight: "medium",
      lineHeight: 25,
      fontFamily: "heading",
    },
  },
};

type MyTheme = typeof defaultTheme;

declare module "dripsy" {
  interface DripsyCustomTheme extends MyTheme {}
}
