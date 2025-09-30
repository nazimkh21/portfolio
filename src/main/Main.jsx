import { useState } from 'react';
import './main.css'
import { myProjects } from "../data.js";
import { motion,AnimatePresence } from 'framer-motion';


const Main = () => {
    const [active, setActive] = useState("all")
    const [arr, setArr] = useState(myProjects)

    const handleClick = (buttonCategory) => {
        setActive(buttonCategory);

        const newArr = myProjects.filter((item) => {
            const zzz = item.category.find((myItem) => {
                return myItem === buttonCategory;
            })
            return zzz === buttonCategory;
        })
        setArr(newArr)
    }
    

    return (
        <main id="projects" className='flex'> 
        {/* we used id="projects" just to jump to the element named project in a tag (href=#projrct) */}
            <section className=' flex left-section'>
                <button onClick={() => { setActive("all"); setArr(myProjects) }} className={active === "all" ? "active" : null} >All Projects</button>

                <button onClick={() => { handleClick("css") }} className={active === "css" ? "active" : null} >Html & CSS </button>

                <button onClick={() => { handleClick("js") }} className={active === "js" ? "active" : null}>JavaScript</button>

                <button onClick={() => { handleClick("react") }} className={active === "react" ? "active" : null}>React & MUI</button>

                <button onClick={() => { handleClick("node") }} className={active === "node" ? "active" : null}>Node and Express</button>
            </section>



            <section className=' flex right-section'>
                <AnimatePresence>
                    {arr.map((item) => {
                        return (
                            <motion.article

                                layout
                                initial={{ transform: "scale(0)" }}
                                animate={{ transform: "scale(1)" }}
                                transition={{type:"spring",damping:8,stiffness:50}}

                                key={item.imgPath} 
                                className='card'>
                                <img width={266} src={item.imgPath} alt="{item.projectTitle}" />
                                <div style={{ width: "266px" }} className="box ">
                                    <h1 className='title'>{item.projectTitle}</h1>
                                    <p className='subtitle'>A responsive and modern portfolio website built with HTML, CSS, and JavaScript to showcase my skills, projects, and experience. It includes smooth navigation, interactive UI elements, and integrated links to my social profiles and resume.</p>

                                    <div className="flex icons">
                                        <div style={{ gap: "11px" }} className='flex'>
                                            <a href={item.link} target='_blank'>
                                            <div className="icon-link"></div></a>
                                            <a href={item.github} target="_blank">
                                            <div className="icon-github"></div></a>
                                        </div>

                                        <a className='link flex' href="">more
                                            <span style={{ alignSelf: "end" }} className='icon-arrow-thin-right'></span>
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        )
                    })}
                </AnimatePresence>
            </section>
        </main>
    )
}


export default Main


