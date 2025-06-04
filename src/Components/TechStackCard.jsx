import React from "react";

const TechStackCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 mt-4 shadow-2xl py-8 rounded-3xl px-4 md:px-6">
      {/* Tech Stack Card */}
      <div className="bg-white rounded-2xl shadow-2xl  px-6 py-10 flex-1 relative w-full">
        <h2 className="text-2xl font-bold mb-1">My Tech Stack</h2>
        <p className="text-sm text-gray-500 mb-6">Always Evolving My Tech Stack</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {[
            {
              name: "ReactJs",
              img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
            },
            {
              name: "JavaScript",
              img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
            },
            {
              name: "TypeScript",
              img: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
            },
            {
              name: "NextJs",
              img: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
            },
            {
              name: "TailwindCSS",
              img: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
            },
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex items-center space-y-6 justify-center px-3 py-2 rounded-xl border border-gray-200 shadow-md bg-white text-gray-800 font-medium w-full min-w-[140px] "
            >
              <img src={tech.img} alt={tech.name} className="w-5 h-5 mr-2" />
              {tech.name}
            </div>
          ))}
        </div>

        {/* Floating Image */}
        <img
          src="/images/card-ui.svg"
          alt="UI"
          className="md:w-44 h-32 absolute -right-1 md:-right-4 -bottom-2 md:-bottom-0"
        />
      </div>

      {/* Collaboration Card */}
      <div className="bg-collabo h-auto bg-cover bg-no-repeat space-y-4 text-white text-center rounded-2xl shadow-2xl py-12 w-full md:max-w-[300px] relative overflow-hidden">
        <h3 className="text-xl font-semibold">I'm Committed to</h3>
        <p className="text-lg font-medium">Collaboration and</p>
        <p className="text-lg font-medium">Clear Communication</p>
        <button className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition">
          Let’s Collaborate
        </button>
      </div>
    </div>
  );
};

export default TechStackCard;
