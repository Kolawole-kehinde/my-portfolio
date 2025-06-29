import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import CustomInput from "./CustomInput";
import ContactInfo from "./ContactInfo";
import { contactDetails } from "./contactDetails";
import { contactFormFields } from "../constant/contactFormFields";
import { contactSchema } from "../constant/Schema";

import { Slide } from "react-awesome-reveal";
import "animate.css";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast.success("Message sent!");
    reset();
  };

  return (
    <section id="contact">
      <div className="wrapper bg-white text-black flex flex-col lg:flex-row items-start justify-center gap-8 p-6 md:p-12 font-roboto min-h-screen">
        {/* Left Section */}
        <div className="flex flex-col justify-between min-h-full space-y-4">
          {/* Top Card - Slide from left */}
          <Slide direction="left" triggerOnce={false} duration={700} cascade damping={0.2}>
            <div className="bg-white p-4 rounded-xl shadow-md h-1/2">
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
          </Slide>

          {/* Contact Info Box - Slide from bottom */}
          <Slide direction="up" triggerOnce={false} duration={700} cascade damping={0.2}>
            <div className="h-1/2">
              <ContactInfo details={contactDetails} />
            </div>
          </Slide>
        </div>

        {/* Right Section - Contact Form */}
        <Slide direction="right" triggerOnce={false} duration={700} cascade damping={0.2}>
          <div className="w-[350px] md:w-[750px] lg:w-[600px] bg-white p-6 rounded-xl shadow-md min-h-full flex flex-col">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Let’s work{" "}
              <span className="text-purple-600 font-bold">together!</span>
            </h2>
            <form
              className="space-y-4 flex flex-col flex-grow"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="flex flex-col md:flex-row gap-4">
                {contactFormFields.slice(0, 2).map(({ name, type, placeholder }) => (
                  <CustomInput
                    key={name}
                    register={register}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    error={errors[name]}
                  />
                ))}
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                {contactFormFields.slice(2).map(({ name, type, placeholder }) => (
                  <CustomInput
                    key={name}
                    register={register}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    error={errors[name]}
                  />
                ))}
              </div>
              <div className="flex flex-col flex-grow">
                <textarea
                  {...register("message")}
                  placeholder="Message"
                  rows={4}
                  className={`w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-purple-500
                    ${errors.message ? "border-red-500" : "border-purple-400"}`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              <div className="flex items-center justify-center mt-auto">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:brightness-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Now"}
                </button>
              </div>
            </form>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default ContactSection;
