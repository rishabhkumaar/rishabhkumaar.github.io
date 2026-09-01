import LeftRail from "@/components/LeftRail";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Profiles from "@/components/Profiles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LeftRail />
      <div className="editorial-wrapper">
        <main>
          <Hero />
          <About />
          <Journey />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Achievements />
          <Profiles />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
