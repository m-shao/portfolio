import { useEffect, useState } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {techStack} from '../data/constants'
import Footer from '../components/Footer'

import SlidingText from '../components/SlidingText'

function TechStack() {
    const [movingText, setMovingText] = useState('TECHSTACK')

    return (
        <>
            <div className='h-screen w-screen bg-port-dark text-[6vw] overflow-hidden flex flex-col justify-between items-center panel-2 sticky top-0 text-port-light'>
                <SlidingText text={movingText} idNumber={1} direction={1}/>
                <div className='flex w-screen justify-center max-w-[90vw] flex-wrap gap-12'>
                    {Object.keys(techStack).map((tech) => (
                        <div className='flex items-center justify-center w-20 h-20 md:w-28 md:h-28 lg:w-44 lg:h-44' key={tech}>
                            <img className="object-contain transition-all grayscale hover:grayscale-0 hover:scale-110 " 
                            src={techStack[tech]} alt={tech} 
                            onMouseOver={() => {setMovingText(tech)}}
                            onMouseLeave={() => {setMovingText("TECHSTACK")}}/>
                        </div>
                    ))}
                </div>
                <SlidingText text={movingText} idNumber={1} direction={1}/>
            </div>
            <div className="w-screen h-[2px] bg-neutral-900"></div>
            <Footer/>
        </>
    )
}

export default TechStack