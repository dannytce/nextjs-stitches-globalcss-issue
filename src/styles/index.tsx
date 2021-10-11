import { createStitches, globalCss } from "@stitches/react";

const config = createStitches({
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      gray900: "#0f0f10",
      gray800: "#151617",
      gray700: "#242628",
      gray600: "#313336",
      gray500: "#414348",
      gray400: "#696c74",
      gray300: "#757981",
      gray200: "#8f939a",
      gray100: "#aaadb2",
      gray50: "#c5c6ca",
      gray25: "#dfe0e2",
      gray15: "#f4f4f5",
      gray10: "#f6f6f6",
      purple900: "#29187e",
      purple700: "#4321ed",
      purple500: "#6042ff",
      purple300: "#735af2",
      red900: "#271616",
      red800: "#572321",
      red700: "#9f3731",
      red600: "#cf443c",
      red500: "#ff5147",
      red400: "#ff6e66",
      red300: "#ff9e99",
      red200: "#ffcfcc",
      red100: "#ffe7e5",
      orange900: "#271d15",
      orange800: "#573a1f",
      orange700: "#9f642e",
      orange600: "#cf8038",
      orange500: "#ff9d42",
      orange400: "#ffaf66",
      orange300: "#ffca99",
      orange200: "#ffe4cc",
      orange100: "#fff2e5",
      yellow900: "#26210f",
      yellow800: "#55460f",
      yellow700: "#9b7c0d",
      yellow600: "#caa10c",
      yellow500: "#f9c50b",
      yellow400: "#fbdb6a",
      yellow300: "#fde79b",
      yellow200: "#fef3cd",
      yellow100: "#fef9e6",
      green900: "#112119",
      green800: "#16442c",
      green700: "#1c7948",
      green600: "#219d5a",
      green500: "#25c06d",
      green400: "#7fe6af",
      green300: "#a9eec9",
      green200: "#d4f7e4",
      green100: "#eafbf2",
      blue900: "#141e28",
      blue800: "#1e3b58",
      blue700: "#2e669f",
      blue600: "#3883cf",
      blue500: "#42a0ff",
      blue400: "#66b2ff",
      blue300: "#99ccff",
      blue200: "#cce5ff",
      blue100: "#e5f2ff",
      lightpurple900: "#1e1728",
      lightpurple800: "#3d2858",
      lightpurple700: "#6a409f",
      lightpurple600: "#8851cf",
      lightpurple500: "#a761ff",
      lightpurple400: "#b880ff",
      lightpurple300: "#c699ff",
      lightpurple200: "#e2ccff",
      lightpurple100: "#f1e5ff",
    },
    fontSizes: {
      hero: "4rem", // 64px
      "hero-light": "4rem", // 64px
      "heading-1": "3rem", // 48px
      "heading-1-light": "3rem", // 48px
      "heading-2-light": "2.5rem", // 40px
      "heading-2": "2.5rem", // 40px
      "heading-3": "2rem", // 32px
      "heading-3-bold": "2rem", // 32px
      "heading-4": "1.5rem", // 24px
      "heading-4-bold": "1.5rem", // 24px
      "heading-5": "1.25rem", // 20px
      "heading-5-bold": "1.25rem", // 20px
      "heading-6": "1rem", // 16px
      "body-16px-default": "1rem", // 16px
      "body-medium-16px": "1rem", // 16px
      "body-14px": "0.875rem", // 14px
      "body-medium-14px": "0.875rem", // 14px
      "body-12px": "0.75rem", // 12px
      "body-medium-12px": "0.75rem", // 12px
      "label-large": "1rem", // 16px
      "label-medium": "0.875rem", // 14px
      "label-small": "0.75rem", // 12px
      caption: "0.75rem", // 12px
    },
    fontWeights: {
      bold: 600,
      medium: 500,
      regular: 400,
      book: 350,
      hero: "$bold",
      "hero-light": "$book",
      "heading-1": "$bold",
      "heading-1-light": "$book",
      "heading-2-light": "$book",
      "heading-2": "$medium",
      "heading-3": "$medium",
      "heading-3-bold": "$bold",
      "heading-4": "$book",
      "heading-4-bold": "$bold",
      "heading-5": "$book",
      "heading-5-bold": "$bold",
      "heading-6": "$medium",
      "body-16px-default": "$regular",
      "body-medium-16px": "$medium",
      "body-14px": "$regular",
      "body-medium-14px": "$medium",
      "body-12px": "$regular",
      "body-medium-12px": "$medium",
      "label-large": "$medium",
      "label-medium": "$medium",
      "label-small": "$medium",
      caption: "$medium",
    },
    lineHeights: {
      hero: 1.125, // 72px
      "hero-light": 1.125, // 72px
      "heading-1": 1.1666666666666667, // 56px
      "heading-1-light": 1.1666666666666667, // 56px
      "heading-2-light": 1.2, // 48px
      "heading-2": 1.2, // 48px
      "heading-3": 1.25, // 40px
      "heading-3-bold": 1.25, // 40px
      "heading-4": 1.3333333333333333, // 32px
      "heading-4-bold": 1.3333333333333333, // 32px
      "heading-5": 1.2, // 24px
      "heading-5-bold": 1.2, // 24px
      "heading-6": 1.5, // 24px
      "body-16px-default": 1.5, // 24px
      "body-medium-16px": 1.5, // 24px
      "body-14px": 1.4285714285714286, // 20px
      "body-medium-14px": 1.4285714285714286, // 20px
      "body-12px": 1.3333333333333333, // 16px
      "body-medium-12px": 1.3333333333333333, // 16px
      "label-large": 1.5, // 24px
      "label-medium": 1.4285714285714286, // 20px
      "label-small": 1.3333333333333333, // 16px
      caption: 1.3333333333333333, // 16px
    },
    radii: {},
  },
});

export const { styled, css, getCssText, theme, keyframes } = config;

// https://dev.to/hankchizljaw/a-modern-css-reset-6p3
export const globalStyles = globalCss({
  "*, *::before, *::after": { boxSizing: "border-box" },
  "body, h1, h2, h3, h4, p, figure, blockquote, dl, dd": {
    margin: 0,
  },
  "ul[role='list'], ol[role='list']": { listStyle: "none" },
  "html:focus-within": { scrollBehavior: "smooth" },
  body: {
    fontFamily: "CircularXXSubset",
    ".fonts-loaded-2 &": {
      fontFamily: "CircularXX",
    },
    fontFeatureSettings: `'ss03' on, 'ss02' on, 'ss01' on, 'liga' off`,
    minHeight: "100vh",
    textRendering: "optimizeSpeed",
    lineHeight: 1.5,
  },
  "a:not([class])": { textDecorationSkipInk: "auto" },
  "img,picture": { maxWidth: "100%", display: "block" },
  "input,button,textarea,select": { font: "inherit" },
  "@media (prefers-reduced-motion: reduce)": {
    "html:focus-within": { scrollBehavior: "auto" },
    "*, *::before, *::after": {
      animationDuration: "0.01ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.01ms !important",
      scrollBehavior: "auto !important",
    },
  },
});
