"use client";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);
  return (
    <div>
      <NavBar isDarkMode={ isDarkMode } setIsDarkMode={ setIsDarkMode } />
      <Header />
      <About isDarkMode={ isDarkMode } />
      <Experiences />
      <Work />
      <Contact isDarkMode={ isDarkMode } />
      <Footer isDarkMode={ isDarkMode } />
    </div>
  );
}
