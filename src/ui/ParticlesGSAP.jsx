import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const NUM_PARTICLES = 50; // Number of particles

const ParticlesGSAP = () => {
  const containerRef = useRef();
  const particlesRef = useRef([]);

  useEffect(() => {
    particlesRef.current.forEach((particle) => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const size = Math.random() * 6 + 2; // size 2-8px
      const duration = Math.random() * 5 + 3; // 3-8 seconds
      const delay = Math.random() * 5;

      // Set initial position and size
      gsap.set(particle, { x, y, width: size, height: size, borderRadius: "50%" });

      // Animate movement
      gsap.to(particle, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        opacity: Math.random() * 0.5 + 0.3,
        scale: Math.random() * 1 + 0.5,
        duration,
        delay,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
    >
      {Array.from({ length: NUM_PARTICLES }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (particlesRef.current[i] = el)}
          className="bg-white absolute"
        ></div>
      ))}
    </div>
  );
};

export default ParticlesGSAP;
