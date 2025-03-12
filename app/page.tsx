"use client";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Work from "./components/Work";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Experiences />
      <Work />
    </div>
  );
}
