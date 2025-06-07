import React from "react";
import {
  FaHome, FaInfoCircle, FaServer, FaProjectDiagram,
} from "react-icons/fa";
import { RiContactsBookLine } from "react-icons/ri";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const navLinks = [
  { icon: <FaHome />, label: "Home", to: "#home" },
  { icon: <FaInfoCircle />, label: "About", to: "#about" },
  { icon: <FaServer />, label: "Services", to: "#services" },
  
];

// Policy and route-based links
const policyLinks = [
 { icon: <FaProjectDiagram />, label: "Projects", to: "#projects" },
  { icon: <RiContactsBookLine />, label: "Contact", to: "#contact" },
];

// Social icons
const socialLinks = [
  { icon: FiGithub, href: "https://github.com" },
  { icon: FiTwitter, href: "https://twitter.com" },
  { icon: FiLinkedin, href: "https://linkedin.com" },
  { icon: HiOutlineMail, href: "mailto:contact@example.com" },
];

const FooterLinkSection = ({ links }) => (
  <ul className="space-y-2">
    {links.map(({ icon, to, label }) => (
      <li key={label} className="flex items-center hover:text-purple-400 transition-colors">
        <span className="mr-2">{icon}</span>
        {to.startsWith("#") ? (
          <a href={to}>{label}</a>
        ) : (
          <Link to={to}>{label}</Link>
        )}
      </li>
    ))}
  </ul>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left - Navigation & Policy Links */}
        <Slide direction="left">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Hot Links
              </span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <FooterLinkSection links={navLinks} />
              <FooterLinkSection links={policyLinks} />
            </div>
          </div>
        </Slide>

        {/* Center - Description & Social Icons */}
        <Fade>
          <div className="flex flex-col justify-between">
            <p className="text-gray-300 mb-6">
              Crafting responsive, high-performance websites with clean code and a user-focused approach.
            </p>
            <div className="overflow-hidden border-2 border-purple-600 rounded-lg py-2">
              <div className="flex space-x-10 animate-marquee min-w-max">
                {socialLinks.map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 flex items-center justify-center text-2xl text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Fade>

        {/* Right - Newsletter */}
        <Slide direction="right">
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to my newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md focus:outline-none text-gray-900 w-full"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-r-md hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </Slide>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p className="mb-4 md:mb-0">© 2025 Khennycool. All rights reserved.</p>
        <p className="flex items-center">
          Built with <span className="text-red-500 mx-1">❤</span> by Khennycool
        </p>
      </div>
    </footer>
  );
};

export default Footer;
