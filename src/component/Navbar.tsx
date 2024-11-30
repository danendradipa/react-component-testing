import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky w-full top-0 z-10 py-8 bg-zinc-900">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold ">Dane</h1>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className=" text-2xl md:hidden focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`fixed md:relative top-0 left-0 h-screen md:h-auto w-full md:w-auto bg-zinc-900 md:bg-transparent flex flex-col md:flex-row items-center md:items-center md:space-x-10 px-4 md:px-0 transition-all duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 text-center mt-16 md:mt-0">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-300 font-bold border-b-2 border-orange-400 pb-1 transition-all duration-300 ease-in-out"
                      : " hover:text-gray-300"
                  }
                  onClick={() => setIsOpen(false)}
                  end
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Social Media Icons (mobile) */}
          <div className="flex space-x-4 mt-6 md:hidden">
            <a href="https://github.com/danendradipa" target="_blank">
              <img src="icon/github.svg" alt="GitHub" className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/in/danendradipa/" target="_blank">
              <img src="icon/linkedin.svg" alt="LinkedIn" className="w-7 h-7" />
            </a>
            <a href="https://instagram.com/danendradipa_" target="_blank">
              <img
                src="icon/instagram.svg"
                alt="Instagram"
                className="w-7 h-7"
              />
            </a>
          </div>
        </nav>

        {/* Social Media Icons (desktop) */}
        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/danendradipa" target="_blank">
            <img src="icon/github.svg" alt="GitHub" className="w-7 h-7" />
          </a>
          <a href="https://www.linkedin.com/in/danendradipa/" target="_blank">
            <img src="icon/linkedin.svg" alt="LinkedIn" className="w-7 h-7" />
          </a>
          <a href="https://instagram.com/danendradipa_" target="_blank">
            <img src="icon/instagram.svg" alt="Instagram" className="w-7 h-7" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
