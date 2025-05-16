
import testimonials from "../constant/testimonialsData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {

  return (
    <section className="relative py-12 px-4 wrapper mx-auto ">
      <h2 className="text-3xl font-bold text-center mb-8">
        What People Are Saying
      </h2>


      <div
    
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
      >
        {testimonials?.map((testimonial, i) => (
          <TestimonialCard key={i} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
