import React from 'react'
import Hero from '../Components/Hero'
import DevProfile from '../Components/DevProfile'
import Services from '../Components/Services'
import PortfolioCards from '../Components/PortfolioCards'
import Testimonials from '../Components/Testimonials'
import ContactSection from '../Components/Contact'

const HomePage = () => {
  return (
    <div>
        <Hero/>
       <DevProfile/>
       <Services/>
       <PortfolioCards/>
       {/* <Testimonials/> */}
       <ContactSection/> 
    </div>
  )
}

export default HomePage