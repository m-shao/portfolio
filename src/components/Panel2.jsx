import { useEffect, useState } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {techStack} from '../data/constants'

function Panel2() {
    const [movingText, setMovingText] = useState('TECH STACK  ')

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".tech-stack-loop-1",
            {
                duration: 1.5,
                x: '-100%',
                repeat: -1,
                ease: "linear",
                scrollTrigger: {
                    trigger: ".panel-2",
                    start: "top 5%",
                    toggleActions: "restart none none reset", 
                },
            }
        )

        gsap.to(".tech-stack-loop-2",
            {
                duration: 1.5,
                x: '100%',
                repeat: -1,
                ease: "linear",
                scrollTrigger: {
                    trigger: ".panel-2",
                    start: "top 5%",
                    toggleActions: "restart none none reset", 
                },
            }
        )


        return() => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [])

    return (
        <div className='h-screen w-screen bg-port-dark text-[6vw] overflow-hidden flex justify-center items-center panel-2 sticky top-0'>
            <div className='absolute w-[200vw] flex tech-stack-1 top-0 right-0 translate-x-[50%]'>
                {[...Array(10)].map((_, index) => {
                    return(
                        <h1 key={"1" + index} className='tech-stack-loop-1'>{movingText}&nbsp;</h1>
                    )
                })}
            </div>
            <div className='flex w-screen justify-around max-w-[75vw]'>
                {Object.keys(techStack).map((tech) => (
                    <img className="object-contain max-h-[10vw] max-w-[10vw] grayscale hover:grayscale-0 hover:scale-110 transition-all " 
                    key={tech}
                    src={techStack[tech]} alt={tech} 
                    onMouseOver={() => {setMovingText(tech)}}
                    onMouseLeave={() => {setMovingText("TECHSTACK")}}/>
                ))}
            </div>

            <div className='absolute w-[200vw] flex bottom-0 tech-stack-2 translate-x-[40%] right-0 '>
                {[...Array(10)].map((_, index) => {
                    return(
                        <h1 key={"2" + index} className='tech-stack-loop-2'>{movingText}&nbsp;</h1>
                    )
                })}
            </div>
        </div>
    )
}

export default Panel2