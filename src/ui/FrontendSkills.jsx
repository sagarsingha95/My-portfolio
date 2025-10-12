import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
} from "react-icons/si";

const FrontendSkills = () => {
  const carouselRef = useRef();

  // Array of icons with their brand colors
  const skills = [
    { icon: SiHtml5, color: "#E34F26" },
    { icon: SiCss3, color: "#1572B6" },
    { icon: SiJavascript, color: "#F7DF1E" },
    { icon: SiReact, color: "#61DAFB" },
    { icon: SiBootstrap , color:"#8E27F8"},
    { icon: SiTailwindcss, color: "#38BDF8" },
    { icon: SiGithub, color: "#ededed" },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;

    // duplicate children for seamless infinite scroll
    const items = Array.from(carousel.children);
    items.forEach((item) => carousel.appendChild(item.cloneNode(true)));

    gsap.to(carousel, {
      xPercent: -50,
      ease: "linear",
      repeat: -1,
      duration: 20,
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-20 ">
      {/* Title */}
      <div className="absolute w-full flex justify-center top-20 z-30 pointer-events-none">
        <p className="text-3xl font-bold text-white">Frontend Skills</p>
      </div>

      {/* Carousel with fade mask */}
      <div
        className="relative z-10 mt-24"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      >
        <div ref={carouselRef} className="flex gap-8 whitespace-nowrap">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="min-w-[100px] flex justify-center">
                <Icon size={70} color={skill.color} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FrontendSkills;
