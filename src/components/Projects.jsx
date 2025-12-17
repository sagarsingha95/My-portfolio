import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pizzaScreenshot from "../assets/Screenshot 2025-10-11 105051.png";
import filmyScreenshot from "../assets/Screenshot 2025-10-11 130603.png";
import Ecommerce from '../assets/Screenshot 2025-12-15 123336.png';
import Gym from '../assets/Screenshot 2025-12-17 092251.png';

const Projects = ({id}) => {
  const containerRef = useRef();

  const myProjects = [
    {
      name:'Fast-react-Pizza',
      desc:' A responsive React app for ordering pizzas online...',
      image:pizzaScreenshot,
      link:'https://fast-react-pizza-7gkdk8svw-sagar-singhas-projects.vercel.app/'
    },
    {
      name:'Filmy-App',
      desc:' FilmyInfo is a sleek movie information site...',
      image:filmyScreenshot,
      link:'https://filmyinfo.netlify.app/'
    },
    {
      name:'Fake-Mart',
      desc:' A Ecommerce app built using fake store api...',
      image:Ecommerce,
      link:'https://fake-mart-ecommerce-jvfvj8l8o-sagar-singhas-projects.vercel.app/'
    },
    {
      name:'Flex-zone-Fitness',
      desc:' A gym membership Website...',
      image:Gym,
      link:'https://gym-website-w4rk.vercel.app/'
    },
  ]

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
            start: "top 100%",
            end: "top 70%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} id={id} className="mb-[100px]">
      <div className="text-center mb-5">
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>
      {myProjects.map((project)=>(
        <div className="p-4 flex flex-col md:flex-row m-auto w-[80%] items-center gap-4 project">
        <img
          src={project.image}
          alt={project.name}
          className="w-[50%]"
        />
        <div className="flex flex-col">
          <p>
            <span className="text-2xl font-bold">{project.name}</span>:{project.desc}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block p-3 border-2 rounded-4xl hover:text-sky-600 hover:border-sky-600 text-center md:self-start select-auto"
          >
            {project.name}
          </a>
        </div>
      </div>
      ))}
      
    </div>
  );
};

export default Projects;
