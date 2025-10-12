import { useState, useRef, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RiBookShelfLine, RiContactsBook3Fill } from "react-icons/ri";
import { FaCode, FaLinkedin, FaGithub } from "react-icons/fa";
import { VscGithubProject } from "react-icons/vsc";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import gsap from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();
  const titleRef = useRef();
  const desktopIconsRef = useRef();
  const mobileIconsRef = useRef();

  const links = [
    { icon: <IoHomeOutline />, text: "Home", href: "home" },
    { icon: <MdOutlinePersonOutline />, text: "About", href: "about" },
    { icon: <RiBookShelfLine />, text: "Education", href: "education" },
    { icon: <FaCode />, text: "Skills", href: "skill" },
    { icon: <VscGithubProject />, text: "Projects", href: "project" },
    { icon: <RiContactsBook3Fill />, text: "Contact", href: "contact" },
  ];

  // Animate navbar on mount
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      titleRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
    );

    if (desktopIconsRef.current) {
      gsap.fromTo(
        desktopIconsRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.4, ease: "power3.out" }
      );
    }
  }, []);

  // Smooth scroll to section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false); // close mobile menu
  };

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 px-4 py-3 flex items-center justify-between
                 text-white bg-black md:bg-transparent md:backdrop-blur-lg transition-all duration-300"
    >
      {/* Logo */}
      <h1
        ref={titleRef}
        className="flex flex-col md:text-[25px] font-bold bg-gradient-to-b from-blue-400 to-green-400
                   bg-clip-text text-transparent"
      >
        Sagar Singha
        <span className="text-[14px] text-gray-300 font-normal">Frontend Developer</span>
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-4 p-2 rounded-2xl border md:border-white/20 md:bg-white/10 md:backdrop-blur-md md:shadow-md">
        {links.map((item, i) => (
          <button
            key={i}
            onClick={() => handleScroll(item.href)}
            className="flex items-center gap-1 cursor-pointer p-2 rounded-2xl
                       transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            {item.icon} {item.text}
          </button>
        ))}
      </nav>

      {/* Desktop Social Icons */}
      <div className="hidden md:flex gap-4 text-2xl" ref={desktopIconsRef}>
        <a
          href="https://linkedin.com/in/sagar-singha-6683b420a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sagarsingha95"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaGithub />
        </a>
      </div>

      {/* Hamburger Menu */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-3xl focus:outline-none"
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-white/10 backdrop-blur-lg flex flex-col items-center gap-6 py-6
                   text-lg font-medium transition-all duration-500 md:hidden ${
                     menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-10 pointer-events-none"
                   }`}
      >
        {links.map((item, i) => (
          <button
            key={i}
            onClick={() => handleScroll(item.href)}
            className="flex items-center gap-2 hover:text-blue-400 transition-all"
          >
            {item.icon} {item.text}
          </button>
        ))}

        {/* Mobile Social Icons */}
        <div className="flex gap-6 text-2xl mt-4" ref={mobileIconsRef}>
          <a href="https://linkedin.com/in/sagar-singha-6683b420a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="cursor-pointer hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://github.com/sagarsingha95" target="_blank" rel="noopener noreferrer">
            <FaGithub className="cursor-pointer hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
