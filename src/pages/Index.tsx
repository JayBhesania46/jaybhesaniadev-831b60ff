
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all section titles
    document.querySelectorAll('.section-title').forEach(el => {
      observer.observe(el);
    });
    
    // Observe reveal elements
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white min-h-screen text-[#2B2B2B] scroll-smooth">
      {mounted && (
        <>
          <Navbar />
          <main className="pt-16">
            <Hero />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
