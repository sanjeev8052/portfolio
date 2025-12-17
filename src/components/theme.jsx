// theme.js
import { createTheme } from "@mui/material/styles";
import { createContext, useState } from "react";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ebe8e8",
    },
    secondary: {
      main: "#262525",
    },
    ternary: {
      main: "#545353",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    rgba: "rgba(0, 0, 0, 0.1)",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#  ",
    },
    secondary: {
      main: "#ccc8c8",
    },
    ternary: {
      main: "#b3b3b3",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    rgba: "rgba(0, 0, 0, 0.3)",
  },
});

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setMode] = useState(true);

  const changeTheme = () => {
    setMode((prevThem) => (prevThem ? false : true));
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { lightTheme, darkTheme, ThemeContextProvider, ThemeContext };
