import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as scroll from "react-scroll";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectItem, setSelectItem] = useState("home");

  const [navbarBackground, setNavbarBackground] = useState("");
  console.log(navbarBackground);

  useEffect(() => {
    // Add an event listener to track scroll position
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setNavbarBackground("bg-[#252734]"); // Change to your desired background color class
      } else {
        setNavbarBackground(""); // Reset the background color
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  sticky top-0 z-20  `}
    >
      <div className={`relative flex items-center justify-between`}>
        <ul
          className={`sm:flex w-full justify-end items-center absolute pt-20 hidden space-x-12 lg:flex p-6 ${
            navbarBackground ? navbarBackground : ""
          } `}
        >
          <li>
            <scroll.Link
              to="home"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={1000}
              onClick={() => setSelectItem("home")}
              className={`font-medium tracking-wide ${
                selectItem === "home"
                  ? "text-blue-400 border-blue-400 border-b p-2 "
                  : "text-white"
              } transition-colors duration-200 hover:text-gray-600 cursor-pointer`}
            >
              Home
            </scroll.Link>
          </li>
          <li>
            <scroll.Link
              to="about"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={1000}
              onClick={() => setSelectItem("about")}
              className={`font-medium tracking-wide ${
                selectItem === "about"
                  ? "text-blue-400 border-blue-400 border-b p-2 "
                  : "text-white"
              } transition-colors duration-200 hover:text-gray-600 cursor-pointer`}
            >
              About
            </scroll.Link>
          </li>
          <li>
            <scroll.Link
              to="project"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={1000}
              onClick={() => setSelectItem("projects")}
              className={`font-medium tracking-wide ${
                selectItem === "projects"
                  ? "text-blue-400 border-blue-400 border-b p-2 "
                  : "text-white"
              } transition-colors duration-200 hover:text-gray-600 cursor-pointer`}
            >
              Projects
            </scroll.Link>
          </li>
          <li>
            <scroll.Link
              to="contact"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={1000}
              onClick={() => setSelectItem("contact")}
              className={`font-medium tracking-wide ${
                selectItem === "contact"
                  ? "text-blue-400 border-blue-400 border-b p-2 "
                  : "text-white"
              } transition-colors duration-200 hover:text-gray-600 cursor-pointer`}
            >
              Contact
            </scroll.Link>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-[#3a243b] focus:bg-[#3a243b]"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-white" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute  top-0 left-0 w-full">
              <div className="p-5 bg-[#404040] border rounded shadow-sm">
                <div className="flex  items-center justify-between mb-4">
                  <div className="">
                    <Link to="/" className="inline-flex items-center">
                      <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                        JASIM AHMED
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-white" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <scroll.Link
                        to="home"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={500}
                        delay={1000}
                        onClick={() => setSelectItem("home")}
                        className={`font-medium tracking-wide ${
                          selectItem === "home"
                            ? "text-blue-400 border-blue-400 border-b p-2 "
                            : "text-white"
                        } transition-colors duration-200 hover:text-gray-600 cursor-pointer`}
                      >
                        Home
                      </scroll.Link>
                    </li>
                    <li>
                      <scroll.Link
                        to="about"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={500}
                        delay={1000}
                        onClick={() => setSelectItem("about")}
                        className={`font-medium tracking-wide ${
                          selectItem === "about"
                            ? "text-blue-400 border-blue-400 border-b p-2 "
                            : "text-white"
                        } transition-colors duration-200 hover:text-gray-600 cursor-pointer`}
                      >
                        About
                      </scroll.Link>
                    </li>
                    <li>
                      <scroll.Link
                        to="project"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={500}
                        delay={1000}
                        onClick={() => setSelectItem("projects")}
                        className={`font-medium tracking-wide ${
                          selectItem === "projects"
                            ? "text-blue-400 border-blue-400 border-b p-2 "
                            : "text-white"
                        } transition-colors duration-200 hover:text-gray-600 cursor-pointer`}
                      >
                        Projects
                      </scroll.Link>
                    </li>
                    <li>
                      <scroll.Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={500}
                        delay={1000}
                        onClick={() => setSelectItem("contact")}
                        className={`font-medium tracking-wide ${
                          selectItem === "contact"
                            ? "text-blue-400 border-blue-400 border-b p-2 "
                            : "text-white"
                        } transition-colors duration-200 hover:text-gray-600 cursor-pointer`}
                      >
                        Contact
                      </scroll.Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
