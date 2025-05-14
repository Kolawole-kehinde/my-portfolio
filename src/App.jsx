import React from 'react'
import Navbar from './Components/layout/Navbar';
import Hero from './Components/Hero';
import Counter from './Components/Counter';

const App = () => {
  return (
    <div className='min-h-screen font-sans bg-white text-gray-800' >
       <Navbar/>
       <Hero/>
       <Counter/>
    </div>
    
  )
}

export default App;