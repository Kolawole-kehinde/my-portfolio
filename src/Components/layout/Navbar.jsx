import React, { useState } from "react";
import { FiSun, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Services", "Projects", "Testimonials", "Contact"];

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4 flex justify-center">
      <nav className="w-full max-w-3xl bg-white/20 backdrop-blur-md border-2 border-black rounded-xl shadow-md px-6 py-3">
    
        <div className="flex items-center justify-between md:justify-center md:gap-10">
          
          <div className="text-2xl font-bold text-purple-600">🔷</div>
          <ul className="hidden md:flex items-center gap-10 text-base font-medium text-gray-800">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-purple-600 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button className="hidden md:inline-block bg-white/30 p-2 rounded-full hover:bg-white/50 transition">
            <FiSun />
          </button>

          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white/90 rounded-xl shadow-md p-4">
            <ul className="flex flex-col gap-4 text-gray-800 font-medium">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-purple-600 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
