import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import gsap from 'gsap'

import star from '../images/star.svg'

function Navbar() {
    useEffect(() => {

        gsap.fromTo(".name-title", {
            opacity: 0,
            y: 25,
        },{
            duration: 2,
            opacity: 1,
            y: 0,
        })

        gsap.fromTo(".job-title", {
            opacity: 0,
        },{
            duration: 3,
            opacity: 1,
        })

        gsap.fromTo(".nav-link", {
            opacity: 0,
        },{
            duration: 3,
            opacity: 1,
            stagger: 0.2,
        })

    }, [])

    return (
        <>
            <div className="sticky top-0 flex items-center justify-center w-full gap-12 px-0 py-6 md:justify-start md:p-6 bg-port-dark">
                <div className='flex flex-col items-center'>
                    <div className="name-title md:text-[20vw] text-[24vw] leading-[85%] z-50 hi top-0 left-0 flex gap-[1vw]">
                        <h1>MINGLUN</h1>
                        <img className='w-[5vw]' src={star} alt="" />
                        <h1>SHAO</h1>
                    </div>
                    <p className="job-title font-[montserrat] md:text-[1.5vw] text-[2.7vw]">Fullstack Developer & UI/UX Designer </p>
                </div>
                <div className="font-[montserrat] flex-1 md:flex justify-center mr-[10%] hidden">
                    <ul className="flex flex-col gap-4 text-[1.1vw]">
                        <li className="cursor-pointer nav-link group">
                            <Link to="tech-stack">
                                <h2>Tech&nbsp;Stack</h2>
                                <div className="h-[1px] w-0 bg-port-light origin-right transition-all duration-300 group-hover:w-full"></div>
                            </Link>
                        </li>
                        <li className="cursor-pointer nav-link group">
                            <Link to="projects">
                                <h2>Projects</h2>
                                <div className="h-[1px] w-0 bg-port-light origin-right transition-all duration-300 group-hover:w-4/5"></div>
                            </Link>
                        </li>
                        <li className="cursor-pointer nav-link group">
                            <Link>
                                <h2>Contact</h2>
                                <div className="h-[1px] w-0 bg-port-light origin-right transition-all duration-300 group-hover:w-4/5"></div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar