import { useRef } from 'react'
import './Hero.css'
import Lottie from 'lottie-react'
import devAnimation from '../animation/dev.json'
import { motion } from 'framer-motion'

const Hero =()=>{
 const lottieRef = useRef(null); // used to controll the speed of the animation

    return(
        <section id="about" className='hero flex'>
            <div className='left-section'>

            <div className='parent-avatar flex'>
                <motion.img
                initial={{transform:"scale(0.5)"}}
                animate={{transform:"scale(1)"}}
                transition={{damping:6 ,type:"spring", stiffness:100}}
                
                src="/me.png" className='avatar' alt="profile" />
                <div className='icon-verified'></div>
            </div>

            <motion.h1 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}

            className='title '>Web Developper + UX Designer </motion.h1>
            <p className='sub-title'>I break down complex user experience problem to create integrity focussed solutions that connect billions of people,A developer and designer passionate about building responsive, functional, and visually engaging digital experiences</p>
            
            <div className="all-icons flex">
                <div className="icon icon-twitter"></div>
                <div className="icon icon-instagram"></div>
                <a href="" target='_blank'>
                <div className="icon icon-github"></div>
                </a>
                <div className="icon icon-linkedin"></div>
            </div>
            </div>


            <div className='right-section animation'>
                <Lottie 
                lottieRef={lottieRef}
                className=""
                onLoadedImages={()=>{
                    // http://lottiereact.com/ for controlling the speed
                 lottieRef.current.setSpeed(0.5);
                }}
                animationData={devAnimation}
            />
            </div>
        </section>
    );
}

export default Hero