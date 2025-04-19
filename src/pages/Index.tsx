
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import Loader from "../components/Loader";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <>
      <Loader />
      <div className="min-h-screen bg-navy text-slate-lighter" style={{ counterReset: "section" }}>
        {mounted && (
          <>
            <Header />
            <main>
              <Hero />
              <About />
              <Experience />
              <Education />
              <Projects />
              <Contact />
            </main>
            <Footer />
            <SocialLinks />
          </>
        )}
      </div>
    </>
  );
};

export default Index;
