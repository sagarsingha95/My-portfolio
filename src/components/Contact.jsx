import React, { useRef, useEffect } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = ({id}) => {
  const email = "sagarsingha619@gmail.com"; // replace with your email
  const linkedin = "https://www.linkedin.com/in/sagar-singha-6683b420a/"; // replace with your LinkedIn

  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // when top of section hits 80% of viewport
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef} id={id}
      className="bg-gray-900 text-white py-12 flex flex-col items-center justify-center space-y-6"
    >
      <h2 className="text-3xl font-bold">Contact Me</h2>

      {/* Contact Links */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/30 hover:bg-white/10 transition"
        >
          <FaEnvelope size={24} />
          {email}
        </a>

        {/* LinkedIn */}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/30 hover:bg-white/10 transition"
        >
          <FaLinkedin size={24} />
          LinkedIn
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} Sagar Singha. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
