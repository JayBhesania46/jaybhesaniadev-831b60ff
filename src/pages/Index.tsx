
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  // Show content after mount (for smooth animations / avoid SSR issues)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white scroll-smooth">
      {mounted && (
        <>
          <Navbar />
          <main className="pt-16">
            <Hero />
            <About />
            <Education />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
