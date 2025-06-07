import React from 'react'
import Navbar from './Components/layout/Navbar';

import Footer from './Components/layout/Footer';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <section id='home'>
    <div className='min-h-screen font-sans bg-white text-gray-800' >
       <Navbar/>
        <HomePage/>
       <Footer/>
    </div>
    </section>
    
  )
}

export default App;