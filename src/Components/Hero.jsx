import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

function Hero() {
  return (
    <section className="relative wrapper rounded-3xl bg-gradient-to-br from-purple-200 via-white to-white py-16 px-4 md:px-8 flex flex-col md:flex-row items-center gap-10 mt-10 overflow-hidden">
 
      <div className="absolute flex top-0 left-1/3 w-[300px] h-[300px] bg-purple-200 rounded-full blur-[200px] -z-10" />


      <div className="flex flex-col md:flex-row md:space-x-10 lg:ml-20 w-full items-center md:items-start">
        {/* Profile Image */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <img
            src="/images/me.png"
            alt="Kehinde"
            className="w-full max-w-xs sm:max-w-sm md:w-[300px] h-auto object-cover rounded-xl"
          />
        </div>


        {/* Text Content */}
        <div className="flex flex-col justify-center text-left max-w-2xl space-y-4 lg:space-y-6 mt-8 md:mt-0 px-2 md:px-0">
          <h2 className="text-xl sm:text-2xl font-semibold">Hi 👋, I'm Kehinde</h2>
          <h1 className="text-3xl md:text-4xl font-bold">Frontend Developer</h1>
          <p className="text-base sm:text-lg text-gray-700 w-full max-w-[500px]">
            I specialize in building modern, responsive, and user-friendly web
            interfaces. With a passion for clean code and seamless user
            experiences, I turn ideas into digital solutions that not only look
            great but also perform flawlessly. Let’s work together to bring your
            vision to life!
          </p>

   
          <div className="flex items-start gap-6 mt-6 flex-wrap">
            <div className="flex space-x-4">
              <TbBrandFiverr className="text-2xl text-gray-600 hover:text-purple-600 transition" />
              <FaGithub className="text-2xl text-gray-600 hover:text-purple-600 transition" />
              <FaLinkedin className="text-2xl text-gray-600 hover:text-purple-600 transition" />
              <FaYoutube className="text-2xl text-gray-600 hover:text-purple-600 transition" />
            </div>
            <button className="bg-purple-600 text-white text-sm px-6 py-2 rounded-full hover:bg-purple-700 transition w-fit">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
