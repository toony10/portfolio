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
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = ''

    }
  }, [isDarkMode])
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Experiences />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
