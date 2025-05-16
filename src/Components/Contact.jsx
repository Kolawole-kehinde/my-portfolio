import React from "react";
import { contactDetails } from "./contactDetails";
import { contactFormFields } from "../constant/contactFormFields";


const ContactSection = () => {
  return (
      <section>
      <div className="wrapper bg-white text-black flex flex-col md:flex-row items-start justify-center gap-8 p-6 md:p-12 font-roboto min-h-screen">
        {/* Left Section */}
        <div className="flex-1 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
              Let’s{" "}
              <span className="text-purple-600 font-bold">create something</span>{" "}
              amazing together!
            </h2>
            <p className="mt-4 text-gray-700 font-medium">
              Feel free to reach out for projects, collaborations, or web
              development inquiries via the form or email.
            </p>
          </div>

          {/* Contact Info Box */}
          <div className="bg-bgImage bg-cover bg-no-repeat rounded-xl space-y-4 p-4 text-black shadow-xl relative overflow-hidden h-[250px]">
            <div className="space-y-3 relative z-10">
              {contactDetails?.map(({ icon, label, value }, index) => (
                <div
                  key={index}
                  className="bg-[#d8c5fe] p-2 rounded-xl flex  items-start gap-3 w-fit"
                >
                  <div className="pt-1">{icon}</div>
                  <div>
                    <p className="font-bold text-lg">{label}</p>
                    <p className="text-sm break-words">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Let’s work{" "}
            <span className="text-purple-600 font-bold">together!</span>
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              {contactFormFields.slice(0, 2).map(({ name, type, placeholder }) => (
                <input
                  key={name}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  className="flex-1 border border-purple-400 rounded-md p-3 outline-none focus:ring-2 focus:ring-purple-500"
                />
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              {contactFormFields.slice(2).map(({ name, type, placeholder }) => (
                <input
                  key={name}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  className="flex-1 border border-purple-400 rounded-md p-3 outline-none focus:ring-2 focus:ring-purple-500"
                />
              ))}
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border border-purple-400 rounded-md p-3 outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600   to-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:brightness-110 transition-all duration-200"
            >
              Send Now
            </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
