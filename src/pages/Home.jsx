import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FristSection from '../components/FristSection';
import Sectionx from '../components/Sectionx';


const Home = () => {

  return (
    <div>
        <Navbar/>
           <Hero/>
           <FristSection/>
        <Footer/>
    </div>
  )
}

export default Home