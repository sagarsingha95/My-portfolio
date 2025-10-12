import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = ({id}) => {
  const containerRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const projects = gsap.utils.toArray(".project", containerRef.current);

    projects.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 20%",
            scrub: true,
            markers: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} id={id}>
      <div className="text-center mb-5">
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>

      <div className="p-4 flex flex-col md:flex-row m-auto w-[80%] items-center gap-4 project">
        <img
          src="\src\assets\Screenshot 2025-10-11 105051.png"
          alt="Fast React Pizza Screenshot"
          className="w-[50%]"
        />
        <div className="flex flex-col">
          <p>
            <span className="text-2xl font-bold">Fast React Pizza</span>: A
            responsive React app for ordering pizzas online...
          </p>
          <a
            href="https://fast-react-pizza-q2z4.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block p-3 border-2 rounded-4xl hover:text-sky-600 hover:border-sky-600 text-center md:self-start select-auto"
          >
            Fast React Pizza
          </a>
        </div>
      </div>

      <div className="p-4 flex flex-col md:flex-row m-auto w-[80%] items-center gap-4 project">
        <img
          src="\src\assets\Screenshot 2025-10-11 130603.png"
          alt="Filmy App Screenshot"
          className="w-[50%]"
        />
        <div className="flex flex-col">
          <p>
            <span className="text-2xl font-bold">Filmy App</span>: FilmyInfo is
            a sleek movie information site...
          </p>
          <a
            href="https://filmyinfo.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block p-3 border-2 rounded-4xl hover:text-sky-600 hover:border-sky-600 text-center md:self-start select-auto"
          >
            Filmy App
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
