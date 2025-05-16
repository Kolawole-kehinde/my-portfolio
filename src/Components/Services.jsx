import React from 'react'
import { services } from '../constant/services'

const Services = () => {

  return (
        <div className="wrapper py-12 bg-white px-4 lg:px-0 font-roboto">
            <div className='flex flex-col items-center justify-center py-8 text-center space-y-4'>
                 <h1 className='text-4xl md:text-5xl font-bold'>My <span className='text-purple-500'>Services</span></h1>
                 <p className='w-full max-w-[600px] text-lg md:text-xl'>As a frontend developer, I create modern, responsive, and user-friendly websites that are both visually appealing and efficient.</p>
            </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {services?.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="w-full max-w-[400px] flex flex-col items-center text-center p-10 space-y-8 rounded-2xl shadow-xl border bg-white hover:shadow-2xl transition"
          >
            <div className="text-4xl bg-gradient-to-tr from-purple-300 to-white p-4 rounded-full">
              {icon}
            </div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{description}</p>
            <button className="flex items-center gap-2 px-4 py-2 border border-purple-600 text-purple-600 font-semibold rounded-md hover:bg-purple-50 transition">
              Let Talk
              <span className="text-lg">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>)
}

export default Services