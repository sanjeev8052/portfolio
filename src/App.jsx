import React, { useContext, useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Home from "./components/Home";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useParams,
} from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AllSkills from "./components/Skills/AllSkills";
import { router } from "./components/NavRoutes";
import { ThemeProvider } from "@emotion/react";
import {
  ThemeContext,
  ThemeContextProvider,
  darkTheme,
  lightTheme,
} from "./components/theme";
import { CssBaseline } from "@mui/material";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 250,
    });
  }, []);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
