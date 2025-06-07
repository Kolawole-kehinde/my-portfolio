import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { cards } from "../constant/cards";
import { Slide, Zoom, Fade, Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

// Custom left slide (without hanging at the left edge)
const slideFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-80px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const buttonColors = {
  purple: "bg-purple-500 hover:bg-purple-600",
  blue: "bg-blue-500 hover:bg-blue-600",
  pink: "bg-pink-500 hover:bg-pink-600",
};

// Choose animation for each card
const getAnimation = (index) => {
  switch (index) {
    case 0:
      return { Component: Slide, props: { direction: "up" } };
    case 1:
      return { Component: Zoom, props: {} };
    case 2:
      return { Component: Fade, props: { direction: "right" } };
    case 3:
      return { Component: Reveal, props: { keyframes: slideFromLeft } };
    default:
      return { Component: Fade, props: { direction: "up" } };
  }
};

const PortfolioCards = () => {
  return (
    <section id="projects">
    <div className="min-h-screen w-full bg-bgImage bg-cover bg-no-repeat flex flex-col items-center justify-center px-4 py-10">
      {/* Header Animation */}
      <Fade direction="up" cascade damping={0.2} duration={800} triggerOnce={false}>
        <header className="text-center max-w-2xl mb-10 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">My Recent Projects</h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-300 max-w-2xl">
            Explore my latest work, blending creativity and code for functional,
            responsive websites with clean design and seamless user experiences.
          </p>
        </header>
      </Fade>

      {/* Cards */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {cards.map((card, idx) => {
          const { Component, props } = getAnimation(idx);

          return (
            <Component
              key={idx}
              delay={idx * 1000}
              duration={1000}
              triggerOnce={false}
              {...props}
            >
              <div className="w-[350px] bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col transform transition-transform hover:scale-[1.03]">
                <div className="relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-60 object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow bg-gray-100">
                  <h2 className="text-lg font-bold text-gray-900">{card.title}</h2>
                  <p className="text-sm text-gray-700 mt-2 line-clamp-2">{card.description}</p>
                  <a
                    href={card.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-flex items-center justify-center gap-2 text-white px-4 py-2 rounded-md text-sm font-medium transition-shadow shadow-md ${buttonColors[card.color]}`}
                  >
                    View Demo <HiMiniArrowTopRightOnSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Component>
          );
        })}
      </main>
    </div>
    </section>
  );
};

export default PortfolioCards;
