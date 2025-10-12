import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SiNextdotjs, SiTypescript, SiFlutter } from "react-icons/si";

const CurrentlyRunning = () => {
  const carouselRef = useRef();

  const skills = [
    { icon: SiNextdotjs, color: "#0c5fef" },
    { icon: SiTypescript, color: "#d3f225" },
    { icon: SiFlutter, color: "#02569B" },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    const items = Array.from(carousel.children);

    // Duplicate children multiple times for smooth scrolling
    if (!carousel.dataset.cloned) {
      for (let i = 0; i < 3; i++) {
        items.forEach((item) => carousel.appendChild(item.cloneNode(true)));
      }
      carousel.dataset.cloned = "true";
    }

    // Animate carousel left-to-right
    gsap.to(carousel, {
      xPercent: 100,
      ease: "linear",
      repeat: -1,
      duration: 20,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          // scale icons based on position
          carousel.childNodes.forEach((child) => {
            const rect = child.getBoundingClientRect();
            const center = window.innerWidth / 2;
            const distance = Math.abs(rect.left + rect.width / 2 - center);
            const scale = 1.5 - Math.min(distance / 500, 0.5); // max scale 1.5
            child.style.transform = `scale(${scale})`;
          });
          return x;
        }),
      },
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* Title */}
      <div className="absolute w-full flex justify-center top-20 z-30 pointer-events-none">
        <p className="text-3xl font-bold text-white">Currently Learning</p>
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
              <div
                key={index}
                className="min-w-[100px] flex justify-center transform transition-transform duration-300"
              >
                <Icon size={70} color={skill.color} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CurrentlyRunning;
