import Navbar from "./components/Navbar";
import ParticlesGSAP from "./ui/ParticlesGSAP";
import About from "./components/About";
import Intro from "./components/Intro";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from './components/Contact'
import Projects from "./components/Projects";

const App = () => {


  return (
    <div className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto scroll-smooth">
      {/* Fixed Particle Background */}
      <ParticlesGSAP className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Intro id='home'/>

      {/* About Section */}
      <section className="relative z-10 px-4 py-20 md:px-20">
        <About id='about'/>
      </section>
      <Education id='education'/>
      <Skills id='skill'/>
      <Projects id='project'/>
      <Contact id='contact'/>
    </div>
  );
};

export default App;
