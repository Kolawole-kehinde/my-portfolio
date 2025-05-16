import React from 'react'
import Navbar from './Components/layout/Navbar';
import Hero from './Components/Hero';
import DevProfile from './Components/DevProfile';
import Services from './Components/Services';
import PortfolioCards from './Components/PortfolioCards';
import Testimonials from './Components/Testimonials';

const App = () => {
  return (
    <div className='min-h-screen font-sans bg-white text-gray-800' >
       <Navbar/>
       <Hero/>
       <DevProfile/>
       <Services/>
       <PortfolioCards/>
       <Testimonials/>
    </div>
    
  )
}

export default App;