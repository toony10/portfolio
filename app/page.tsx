"use client";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
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
