import React from "react";

const TechStackCard = () => {
  return (
           <div className="flex flex-col md:flex-row items-center gap-6 mt-4 shadow-2xl py-8 rounded-3xl px-6">
      {/* Tech Stack Card */}
      <div className="bg-white rounded-2xl shadow-2xl px-6 py-12 flex-1 relative">
        <h2 className="text-2xl font-bold mb-1">My Tech Stack</h2>
        <p className="text-sm text-gray-500 mb-6">Always Evolving My Tech Stack</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 relative">
          <div className="flex items-center justify-center px-4 py-2 rounded-xl border border-gray-200 shadow-2xl bg-white text-gray-800 font-medium">
            <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" className="w-5 h-5 mr-2" />
            ReactJs
          </div>
          <div className="flex items-center justify-center px-4 py-2 rounded-xl border border-gray-200 shadow-2xl bg-white text-gray-800 font-medium">
            <span className="text-gray-400 mr-2">ex</span>
            ExpressJs
          </div>
          <div className="flex items-center justify-center px-4 py-2 rounded-xl border border-gray-200 shadow-2xl bg-white text-gray-800 font-medium z-50">
            <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="TS" className="w-5 h-5 mr-2 " />
            Typescript
          </div>
          <div className="flex items-center justify-center px-4 py-2 rounded-xl border border-gray-200 shadow-2xl bg-white text-gray-800 font-medium z-30 md:z-0">
            <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="NextJs" className="w-5 h-5 mr-2" />
            NextJs
          </div>
          <div className="flex items-center justify-center px-4 py-2 rounded-xl border border-gray-200 shadow-2xl bg-white text-violet-600 font-medium">
            <img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" alt="TailwindCSS" className="w-5 h-5 mr-2" />
            TailwindCSS
          </div>
        
        </div>
          <div>
          <img src="/images/card-ui.svg" alt=""  className="md:size-44 size-40 absolute -right-1 md:right-2 -bottom-2 md:-bottom-3" />
        </div>
        
      </div>

      {/* Collaboration Card */}
      <div className="bg-gradient-to-br from-purple-500 via-blue-500 to-green-400 space-y-4 text-white text-center rounded-2xl shadow-2xl py-6 w-full md:max-w-[300px] relative overflow-hidden">
        <h3 className="text-xl font-semibold">I'm Committed to</h3>
        <p className="text-lg font-medium">Collaboration and </p>
        <p className="text-lg font-medium">Clear Communication</p>
        <button className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition">
          Let Collaborate
        </button>
      </div>
    </div>
  );
};

export default TechStackCard;