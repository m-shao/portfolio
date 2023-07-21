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
        <div className="flex items-center gap-12 w-full sm:justify-center p-6 sm:px-0 sm:py-6 sticky top-0 bg-port-dark">
            <div className='flex flex-col items-center'>
                <div className="name-title text-[20vw] sm:text-[24vw] leading-[85%] z-50 hi top-0 left-0 flex gap-[1vw]">
                    <h1>MINGLUN</h1>
                    <img className='w-[5vw]' src={star} alt="" />
                    <h1>SHAO</h1>
                </div>
                <p className="job-title font-[montserrat] text-[1.5vw] sm:text-[2.7vw]">Fullstack Developer & UI/UX Designer </p>
            </div>
            <div className="font-[montserrat] flex-1 flex justify-center mr-[10%] sm:hidden">
                <ul className="flex flex-col gap-4 text-[1.1vw]">
                    <li className="nav-link cursor-pointer group">
                        <a href="#panel1">
                            <h2>About&nbsp;Me</h2>
                            <div className="h-[1px] w-0 bg-port-light origin-right transition-all duration-300 group-hover:w-full"></div>
                        </a>
                    </li>
                    <li className="nav-link cursor-pointer group">
                        <a href="#panel3">
                            <h2>Projects</h2>
                            <div className="h-[1px] w-0 bg-port-light origin-right transition-all duration-300 group-hover:w-4/5"></div>
                        </a>
                    </li>
                    <li className="nav-link cursor-pointer group">
                        <h2>Contact</h2>
                        <div className="h-[1px] w-0 bg-port-light origin-right transition-all duration-300 group-hover:w-4/5"></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar