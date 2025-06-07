import React from 'react';
import { services } from '../constant/services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import 'animate.css/animate.min.css';
import { Fade } from 'react-awesome-reveal';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section id='services' className="wrapper py-12 bg-white px-4 lg:px-0 font-roboto">
      <div
        ref={ref}
        className="flex flex-col items-center justify-center py-8 text-center space-y-4"
      >
        <Fade
          triggerOnce={false}
          direction="down"  // from top means animating downwards
          duration={800}
          delay={100}
          cascade={false}
          when={inView}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            My <span className="text-purple-500">Services</span>
          </h1>
        </Fade>

        <Fade
          triggerOnce={false}
          direction="up"  // from bottom means animating upwards
          duration={800}
          delay={300}
          cascade={false}
          when={inView}
        >
          <p className="w-full max-w-[800px] text-sm md:text-xl text-gray-700">
            Elevate your digital presence with expertly crafted frontend
            solutions that blend stunning design with flawless functionality.
            From responsive layouts to seamless interactivity, I build
            experiences that captivate and engage users on every device.
          </p>
        </Fade>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        className="!pb-10"
      >
        {services.map(({ icon, title, description }, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full max-w-[400px] mx-auto flex flex-col items-center text-center p-10 space-y-8 rounded-2xl shadow-xl border bg-white hover:shadow-2xl transition"
              style={{ height: '400px', minHeight: '350px' }}
            >
              <div className="text-4xl bg-gradient-to-tr from-purple-300 to-white p-4 rounded-full">
                {icon}
              </div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-gray-600 text-base leading-relaxed flex-grow">{description}</p>
              <button className="flex items-center gap-2 px-4 py-2 border border-purple-600 text-purple-600 font-semibold rounded-md hover:bg-purple-50 transition">
                Let’s Talk
                <span className="text-lg">→</span>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        :global(.swiper-pagination-bullet) {
          background: #ccc;
          opacity: 1;
        }
        :global(.swiper-pagination .swiper-pagination-bullet-active) {
          background: #9333ea !important; /* purple-600 */
        }
      `}</style>
    </section>
  );
};

export default Services;
