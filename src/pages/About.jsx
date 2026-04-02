import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  
  return (
    <div>
      <Navbar/>
      <h1 className='text-3xl font-bold text-center mt-10'>About Us</h1>
      <p className='text-center mt-4'>We are a company dedicated to providing the best services to our customers. Our team is passionate about delivering high-quality products and exceptional customer service.</p>
      <Footer/>
    </div>
  )
}

export default About