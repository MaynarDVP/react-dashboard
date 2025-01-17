import { createContext, useMemo, useState, useContext } from "react";
import { createTheme, Theme } from "@mui/material/styles";

// Extend the Theme interface to include toggleColorMode
declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
  interface Theme {
    toggleColorMode: () => void;
  }
  interface ThemeOptions {
    toggleColorMode?: () => void;
  }
}

// Interface for Theme mode
interface ITheme {
  mode: "light" | "dark";
}

// Colors based on the theme mode
export const tokens = (mode: ITheme["mode"]) => ({
  ...(mode === "dark"
    ? {
        gray: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1f2a40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        green: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        red: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blue: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
      }
    : {
        gray: {
          900: "#141414",
          800: "#292929",
          700: "#3d3d3d",
          600: "#525252",
          500: "#666666",
          400: "#858585",
          300: "#a3a3a3",
          200: "#c2c2c2",
          100: "#e0e0e0",
        },
        primary: {
          900: "#040509",
          800: "#080b12",
          700: "#0c101b",
          600: "#101624",
          500: "#141b2d",
          400: "#434957",
          300: "#727681",
          200: "#a1a4ab",
          100: "#d0d1d5",
        },
        green: {
          900: "#0f2922",
          800: "#1e5245",
          700: "#2e7c67",
          600: "#3da58a",
          500: "#4cceac",
          400: "#70d8bd",
          300: "#94e2cd",
          200: "#b7ebde",
          100: "#dbf5ee",
        },
        red: {
          900: "#2c100f",
          800: "#58201e",
          700: "#832f2c",
          600: "#af3f3b",
          500: "#db4f4a",
          400: "#e2726e",
          300: "#e99592",
          200: "#f1b9b7",
          100: "#f8dcdb",
        },
        blue: {
          900: "#151632",
          800: "#2a2d64",
          700: "#3e4396",
          600: "#535ac8",
          500: "#6870fa",
          400: "#868dfb",
          300: "#a4a9fc",
          200: "#c3c6fd",
          100: "#e1e2fe",
        },
      }),
});

// Theme settings based on the mode
export const themeSettings = (mode: ITheme["mode"]) => {
  const colors = tokens(mode);
  return createTheme({
    palette: {
      mode,
      primary: {
        main: colors.primary[500],
      },
      secondary: {
        main: colors.green[500],
      },
      neutral: {
        dark: colors.gray[700],
        main: colors.gray[500],
        light: colors.gray[100],
      },
      background: {
        default: mode === "dark" ? colors.primary[500] : "#fcfcfc",
      },
    },
    typography: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 32,
      },
      h3: {
        fontSize: 24,
      },
      h4: {
        fontSize: 20,
      },
      h5: {
        fontSize: 16,
      },
      h6: {
        fontSize: 14,
      },
    },
    toggleColorMode: () => {},
  });
};

// Create Context
export const ColorModeContext = createContext({ 
  toggleColorMode: () => {} 
});

export const useMode = () => {
  const [mode, setMode] = useState<ITheme["mode"]>("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode] as [Theme, typeof colorMode];
};

export const useColorMode = () => useContext(ColorModeContext);
