import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedLine from "../ui/AnimatedLine";

gsap.registerPlugin(ScrollTrigger);

const About = ({id}) => {
  const aboutRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",     // when the top of element hits 80% of viewport
          end: "bottom 20%",    // when bottom of element hits 20% of viewport
          scrub: true,          // smooth animation linked to scroll
        },
      }
    );

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className="text-center mx-auto max-w-3xl space-y-6 text-white" id={id}
    >
      <h2 className="text-5xl md:text-6xl font-bold">About Me</h2>
      <p className="text-lg md:text-xl leading-relaxed">
        I'm a passionate frontend developer with a love for creating beautiful,
        functional web experiences. My journey in web development started with
        curiosity and has evolved into a dedication to crafting digital
        solutions that make a difference.
        <br />
        <br />
        When I'm not coding, you'll find me exploring new technologies,
        contributing to open-source projects, or learning about the latest
        trends in web development. I believe in continuous learning and pushing
        the boundaries of what's possible on the web.
        <br />
        <br />
        My goal is to bridge the gap between design and development, creating
        seamless user experiences that are both visually stunning and highly
        functional.
      </p>
      <AnimatedLine />
    </div>
  );
};

export default About;
