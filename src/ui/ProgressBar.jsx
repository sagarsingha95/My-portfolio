import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const steps = [
  "Higher Education Kendriya Vidyala Ongc",
  "Bachelor in CSc Assam DownTown University",
  "Assistant Teacher (CS) Al Ameen Model Academy",
  "Freelancer",
];

const ProgressBar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="flex flex-col items-center mt-10">
      <div
        ref={ref}
        className="relative w-2 h-[500px] flex flex-col justify-evenly items-center"
      >
        {/* Animated vertical line */}
        <motion.div
          initial={{ height: 0 }}
          animate={controls}
          variants={{
            visible: { height: "100%", transition: { duration: 1.5, ease: "easeOut" } },
          }}
          className="absolute left-1/2 -translate-x-1/2 w-2 bg-cyan-400 rounded-full origin-bottom "
        ></motion.div>

        {/* Steps */}
        {steps.map((step, i) => (
          <div key={i} className="relative flex flex-col items-center w-[90%]">
            {/* Animated circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={controls}
              variants={{
                visible: { scale: 1, transition: { delay: i * 0.3, type: "spring", stiffness: 300 } },
              }}
              className="h-[40px] w-[40px] bg-white border-4 border-cyan-500 rounded-full z-10 hover:scale-120 transition-all  cursor-pointer"
            ></motion.div>

            {/* Label */}
            <motion.p
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0, transition: { delay: i * 0.3 + 0.2, duration: 0.8 } },
              }}
              className={`absolute text-base  font-medium text-white leading-snug ${
                i % 2 === 0 ? "left-16 text-left text-xs w-[120px] md:text-[15px] md:w-[220px]" : "right-16 md:text-[15px] text-xs w-[120px] text-right md:w-[220px]"
              }`}
            >
              {step}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
