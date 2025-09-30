import { useState } from 'react'
import './App.css'
import Header from './header/Header'
import Hero from './hero/Hero'
import Main from './main/Main'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import Skills from './skills/Skills'
import Service from './service/Service'
import Feedback from './feedback/Feedback'


function App() {
  

  return (
    <div className='container'>
     <Header/>
     <Hero/>
     <div className="divider"/>
     <Main/>
     <div className="divider"/>
     <Skills/>
     <div className="divider"/>
     <Service/>
     <div className="divider"/>
     <Feedback/>
     <div className="divider"/>
     <Contact/> 
     <div className="divider"/>
     <Footer/>
   

    </div>
  )
}

export default App
