import React from "react";
import TechStackCard from "./TechStackCard";
import { useInView } from "react-intersection-observer";
import { Slide, Fade, Zoom } from "react-awesome-reveal";

const DevProfile = () => {
  const [leftRef, leftInView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [codeRef, codeInView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [drivesRef, drivesInView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [techRef, techInView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section className="py-10" id="about">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row md:items-stretch items-center gap-6">

          {/* Left Profile Card */}
          <div
            ref={leftRef}
            className="w-full max-w-[350px] h-[350px] py-4 bg-gradient-to-tr from-white via-white to-purple-500 p-4 rounded-2xl shadow-2xl relative"
          >
            <Slide
              direction="left"
              triggerOnce={false}
              cascade
              duration={800}
              delay={100}
              key={leftInView ? "visible-left" : "hidden-left"}
            >
              <div className="shadow-2xl flex items-center justify-start gap-6 px-4 py-2 rounded-3xl mb-6">
                <img
                  src="/images/me.png"
                  alt="Profile"
                  className="size-16 rounded-full animate__animated animate__pulse animate__infinite animate__slow hover:animate__bounce"
                />
                <div>
                  <h1>Kolawole Kehinde</h1>
                  <p>Software Engineer</p>
                </div>
              </div>
              <h4 className="mt-4">Passionate</h4>
              <p>Developer and</p>
              <p>Lifelong Learner</p>
              <p className="my-4">
                I adapt to different time zones to make sure communication is smooth,
                no matter where you're located.
              </p>
              <div>
                <img
                  src="/images/window.svg"
                  alt=""
                  className="absolute -bottom-14 -right-8 "
                />
              </div>
            </Slide>
          </div>

          {/* Right Side */}
          <div className="flex flex-col md:flex-col lg:flex-row gap-4 bg-ShowcaseImg bg-center bg-cover bg-no-repeat w-full h-auto rounded-2xl shadow-2xl p-4">

            {/* Developer Code Card */}
            <div
              ref={codeRef}
              className="w-full lg:w-[300px] md:w-full rounded-2xl shadow-2xl bg-white/90"
            >
              <Slide
                direction="down"
                triggerOnce={false}
                cascade
                duration={1000}
                delay={300}
                key={codeInView ? "visible-code" : "hidden-code"}
              >
                <div>
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
              </Slide>
            </div>

            {/* What Drives Me Card */}
            <div
              ref={drivesRef}
              className="rounded-2xl h-auto font-roboto shadow-2xl p-6 flex-1 bg-gradient-to-tr from-gray-100 via-white to-purple-500 py-5"
            >
              <Fade
                triggerOnce={false}
                cascade
                duration={1000}
                delay={600}
                direction="right"
                key={drivesInView ? "visible-drives" : "hidden-drives"}
              >
                <h3 className="text-2xl font-medium mb-4 text-purple-500">What Drives Me</h3>
                <p className="text-gray-800 text-xl font-semibold">
                  I’m passionate about the intersection of design 🎨 and development 💻.
                  I believe the best digital experiences are built with a deep
                  understanding of the user 🧑‍💻 and a commitment to innovation ✨.
                  Whether working on a simple landing page or a complex web app, I bring
                  precision 🎯, creativity 🧠, and a user-first mindset to every project.
                </p>
              </Fade>
            </div>
          </div>
        </div>

        {/* TechStackCard */}
        <div ref={techRef} className="shadow-2xl mt-10">
          <Zoom
            triggerOnce={false}
            duration={1200}
            delay={400}
            key={techInView ? "visible-tech" : "hidden-tech"}
          >
            <TechStackCard />
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default DevProfile;
