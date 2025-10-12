import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedLine = ({ className = "" }) => {
  const lineRef = useRef();

  useEffect(() => {
    gsap.to(lineRef.current, {
      backgroundPosition: "200% 0%", // move the gradient
      duration: 3,
      repeat: -1, // infinite loop
      ease: "linear",
    });
  }, []);

  return (
    <div
      ref={lineRef}
      className={`w-full h-1 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-[length:200%_100%] ${className}`}
    ></div>
  );
};

export default AnimatedLine;
