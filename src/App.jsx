import React, { useState } from 'react'
import NavBar from './Components/Navbar/NavBar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
// import Video from './Components/Video/Video'


const App = () => {

 
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="container">
        <Title para='OUR PROGRAM' heading='What We Offer...'/>
        <Programs/>
        <About />
        <Title para='GALLERY' heading='Campus Photos...'/>
        <Campus/>
        <Title para='TESTIMONIALS' heading='What Student Says...'/>
        <Testimonials/>
        <Title para='CONTACT US' heading='Get In Touch...'/>
        <Contact />
        <Footer/>
        {/* <Video /> */}
      </div>
      
    </div>
  )
}

export default App
