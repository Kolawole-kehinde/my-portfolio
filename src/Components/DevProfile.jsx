import React from "react";
import TechStackCard from "./TechStackCard";

const DevProfile = () => {
  return (
    <section className="py-10">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full max-w-[350px] h-[350px] py-4 bg-gradient-to-tr from-white via-white to-purple-500  p-4 rounded-2xl shadow-2xl relative">
            <div className=" shadow-2xl flex items-center justify-start gap-6 px-4 py-2 rounded-3xl mb-6">
              <img
                src="/images/me.png"
                alt=""
                className="size-16 rounded-full"
              />
              <div className="">
                <h1>Kolawole Kehinde</h1>
                <p>Software Engineer</p>
              </div>
            </div>
            <h4 className="mt-4">Passionate</h4>
            <p>Developer and</p>
            <p>Lifelong Leaner</p>
            <p className="my-4">
              I adapt to different time zones to make sure communication is
              smooth, no matter where you're located.
            </p>
            <div>
              <img
                src="/images/window.svg"
                alt=""
                className="absolute right-2 bottom-0"
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row gap-4 bg-ShowcaseImg bg-center bg-cover bg-no-repeat w-full h-auto rounded-2xl shadow-2xl p-4 ">
            <div className="w-full max-w-[5000px] lg:w-[300px] md:my-5 rounded-2xl shadow-2xl bg-white/90">
              <div className="flex items-center space-x-1 border-b-2 p-4">
                <h2 className="h-2 w-2 rounded-full bg-red-500"></h2>
                <h2 className="h-2 w-2 rounded-full bg-purple-500"></h2>
                <h2 className="h-2 w-2 rounded-full bg-green-500"></h2>
              </div>
              <div className="bg-gray-100 p-6 rounded-2xl font-mono text-sm">
                <p>
                  <span className="text-purple-600">const</span>{" "}
                  <span className="text-blue-600">developer</span> = {"{"}
                </p>
                <p className="ml-4">
                  <span className="text-green-600">firstName</span>:{" "}
                  <span className="text-red-400">"Kehinde"</span>,
                </p>
                <p className="ml-4">
                  <span className="text-green-600">lastName</span>:{" "}
                  <span className="text-red-400">"Kolawole"</span>,
                </p>
                <p className="ml-4">
                  <span className="text-green-600">abs</span>:{" "}
                  <span className="text-red-400">"Khennycool"</span>,
                </p>
                <p className="ml-4">
                  <span className="text-green-600">hobby</span>:{" "}
                  <span className="text-blue-600">repeat</span> = {"{}"}
                </p>
                <p className="text-gray-500 ml-4">//est();</p>
                <p className="text-gray-500 ml-4">//sleep();</p>
                <p className="text-gray-500 ml-4">//code();</p>
                <p className="text-gray-500 ml-4">//repeat();</p>
                <p>{"}"}</p>
              </div>
            </div>
            <div className="rounded-2xl h-[300px] font-roboto shadow-2xl p-6 flex-1 bg-gradient-to-tr from-gray-100 via-white to-purple-500 py-5">
              <h3 className="text-2xl font-medium mb-4 text-purple-500">What Drives Me</h3>
              <p className="text-gray-800 text-xl font-semibold">
                I’m passionate about the intersection of design 🎨 and development 💻.
                I believe the best digital experiences are built with a deep
                understanding of the user 🧑‍💻 and a commitment to innovation ✨.
                Whether working on a simple landing page or a complex web app, I bring
                precision 🎯, creativity 🧠, and a user-first mindset to every project.
              </p>
            </div>
          </div>
        </div>

    <div className="shadow-2xl">
          <TechStackCard/>
    </div>
      </div>
      
    </section>
  );
};

export default DevProfile;
