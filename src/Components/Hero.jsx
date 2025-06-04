import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import Marquee from "react-fast-marquee";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  { label: "Years Of Experience", end: 2 },
  { label: "Completed projects", end: 150 },
  { label: "Awards", end: 12 },
  { label: "Clients Worldwide", end: 321 },
];

function Hero() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (statsInView) {
      const interval = setInterval(() => {
        setCounts((prev) =>
          prev.map((count, i) =>
            count < stats[i].end
              ? count + Math.ceil(stats[i].end / 50)
              : stats[i].end
          )
        );
      }, 30);

      return () => clearInterval(interval);
    }
  }, [statsInView]);

  return (
    <section>
      <div className="relative wrapper rounded-3xl bg-gradient-to-br from-purple-200 via-white to-white py-16 px-4 md:px-8 flex flex-col md:flex-row items-center gap-10 mt-10 overflow-hidden">
        <div className="flex flex-col md:flex-row md:space-x-10 lg:ml-20 w-full items-center md:items-start">

          {/* Profile Image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-auto flex justify-center md:justify-start"
          >
            <img
              src="/images/me.png"
              alt="Kehinde"
              className="w-full max-w-xs sm:max-w-sm md:w-[300px] h-auto object-cover rounded-xl"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center text-left max-w-2xl space-y-4 lg:space-y-6 mt-8 md:mt-0 px-2 md:px-0"
          >
            <h2 className="text-xl sm:text-2xl font-semibold">Hi 👋, I'm Kehinde</h2>
            <h1 className="text-3xl md:text-4xl font-bold">Frontend Developer</h1>
            <p className="text-base sm:text-lg text-gray-700">
              I specialize in building modern, responsive, and user-friendly web
              interfaces. With a passion for clean code and seamless user
              experiences, I turn ideas into digital solutions that not only look
              great but also perform flawlessly. Let’s work together to bring your
              vision to life!
            </p>

            {/* Social Marquee + Contact Button */}
            <div className="flex items-center gap-4 mt-6">
              <div className="border border-purple-300 rounded-md p-2 bg-white w-[220px] overflow-hidden">
                <Marquee pauseOnHover gradient={false} speed={40}>
                  <div className="flex gap-6 items-center">
                    <TbBrandFiverr className="text-2xl text-gray-600 hover:text-purple-600 transition" />
                    <FaGithub className="text-2xl text-gray-600 hover:text-purple-600 transition" />
                    <FaLinkedin className="text-2xl text-gray-600 hover:text-purple-600 transition" />
                    <FaInstagram className="text-2xl text-gray-600 hover:text-purple-600 transition" />
                  </div>
                </Marquee>
              </div>
              <button className="bg-purple-600 text-white text-sm px-6 py-2 rounded-full hover:bg-purple-700 transition w-fit">
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Counter Section */}
      <motion.section
        ref={statsRef}
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-[20] lg:-mt-36 -mt-14 wrapper rounded-3xl bg-gradient-to-br from-white to-purple-100 py-4 md:px-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 text-center gap-4 sm:gap-6 md:gap-10"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center text-purple-900 font-bold"
          >
            <div className="text-xl sm:text-2xl lg:text-3xl">{counts[i]}+</div>
            <div className="text-sm lg:text-base font-medium text-gray-700">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.section>
    </section>
  );
}

export default Hero;
