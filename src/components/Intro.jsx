import { useRef, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import AnimatedLine from "../ui/AnimatedLine";
import gsap from "gsap";

const Intro = ({id}) => {
    const heroRef = useRef();
      useEffect(() => {
    // Hero animation: fade + scale
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="scroll-smooth" id={id}>
        <section
        ref={heroRef}
        className="relative z-10 flex flex-col justify-center items-center min-h-screen text-white px-4 md:px-20"
      >
        <div className="text-center space-y-4 md:space-y-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold">Hi 👋</h1>
          <h1 className="text-5xl md:text-6xl font-bold">
            I'm{" "}
            <span className="bg-gradient-to-b from-blue-400 to-green-400 bg-clip-text text-transparent">
              Sagar
            </span>
            , a Frontend Developer.
          </h1>
          <p className="text-xl md:text-2xl mx-auto">
            I create clean, modern, and fully responsive websites that blend
            seamless design with functionality.
          </p>
            <div className="flex flex-col items-center md:flex-row justify-center gap-4">
                <button className="text-[20px] p-2 border-2 border-stone-300 rounded-4xl w-[150px] cursor-pointer hover:border-sky-500 hover:text-sky-500 hover:scale-105 transition-all duration-75 flex items-center gap-2 justify-center"><FaGithub />Git</button>
                <button className="text-[20px] p-2 border-2 border-stone-300 rounded-4xl w-[150px] cursor-pointer hover:border-sky-500 hover:text-sky-500 hover:scale-105 transition-all duration-75 flex items-center gap-2 justify-center"><FaLinkedin />Linkedin</button>
                <button className="text-[20px] p-2 border-2 border-stone-300 rounded-4xl w-[150px] cursor-pointer hover:border-sky-500 hover:text-sky-500 hover:scale-105 transition-all duration-75 flex items-center gap-2 justify-center">Resume</button>
            </div>
          {/* Animated gradient line under hero */}
          <AnimatedLine className="mt-6 w-full max-w-2xl mx-auto" />
        </div>
      </section>
    </div>
  )
}

export default Intro