import Navbar from "../compoents/Navbar";
import Hero from "../compoents/Hero";
import About from "../compoents/AboutMe";
import Skills from "../compoents/Skills";
import Experience from "../compoents/Experience";
import Projects from "../compoents/Projects";
import Education from "../compoents/Education";
import Contact from "../compoents/Contact";
import Footer from "../compoents/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
