import { useEffect, useState } from 'react'
import './Header.css'



const Header =()=>{
const[showModal,setShowModal]=useState(false)
const[theme,setTheme]=useState(localStorage.getItem("currentMode") ?? "dark") 

//dark and light mode
useEffect(()=>{
    if(theme === "light"){
        document.body.classList.remove("dark")  
        document.body.classList.add("light")
    }else{
        document.body.classList.remove("light")  
        document.body.classList.add("dark")
    }
}, [theme])


    return(
        <header className= 'flex'>
            <button onClick={()=>{
                setShowModal(true)

            }} className='menu icon-menu flex'/>
            
            <div className='flex'> 
                    <h2 className="logo" >Nazim</h2>
                </div>
            <nav>
                <ul className='flex'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>


            <button onClick={()=>{
                //send value to local storage
                localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark" )

                // get value from local storage
                setTheme(localStorage.getItem("currentMode"))


            }} className='mode flex'>
                {theme ==="dark" ? (<span className='icon-moon-o'> </span>) : (<span className='icon-sun'> </span>)}
            
            
            </button>
            
            {showModal && (
                <div className='fixed'> 
                <ul className='modal'>
                    <li>
                        <button className='icon-close' onClick={()=>{
                            setShowModal(false)
                        }}/>
                       
                        
                    </li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                
    
                
            </div>
            )}
        </header>
    )
}

export default Header