
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Index = () => {
  // We simplify the page showing only relevant sections matching the sample: header, hero, projects, footer
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#0b101d] text-white">
        {mounted && (
          <>
            <Header />
            <main className="pt-24">
              <Hero />
              <Projects />
            </main>
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Index;
