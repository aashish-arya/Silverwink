import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='select-none'>
      <Navbar />
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
