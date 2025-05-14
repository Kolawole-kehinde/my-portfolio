import React from 'react'
import { FiMoon } from 'react-icons/fi'
import { IoMdMenu } from 'react-icons/io'
import { IoSunnyOutline } from 'react-icons/io5'

const Navbar = () => {
  return (
   <header>
        <nav>
            <menu>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Testimonials</li>
                <li>Contact</li>
            </menu>

            <IoSunnyOutline />
            <FiMoon />
            <IoMdMenu />
        </nav>
   </header>
  )
}

export default Navbar