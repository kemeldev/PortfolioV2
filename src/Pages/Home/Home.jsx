import AboutMe from "./AboutMe/AboutMe";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import MoreWork from "./MoreWorks/MoreWork";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";

export default function Home() {
  
  return (
    <>
      <section id="home">
        <Navbar />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="moreWork">
        <MoreWork />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}