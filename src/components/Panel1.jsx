import { useEffect } from "react"

import Globe from "./Globe"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Panel1() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(".panel1-text", 
            {
                opacity: 0, 
                y: 50,
            },
            {
                duration: 1.5,
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: ".panel1",
                    start: "top 5%",
                    toggleActions: "restart none none reverse", 
                    markers: false
                },
            }
        )

        return() => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [])

    return (
        <div id='panel1' className='bg-port-dark flex -translate-x-[50vw] h-screen w-full sticky top-0 '>
            <Globe/>
            <div className="w-[50vw] bg-port-dark flex flex-col justify-center text-port-light px-6 panel1">
                <h1 className="text-5xl md:text-[6vw] panel1-text max-w-[50vw]">Who Is Minglun Shao?</h1>
                <p className="font-[Montserrat] text-xs md:text-[1.04vw] max-w-[40vw] leading-[190%] w-[50vw] panel1-text">
                Hi! I am a Highschool Fullstack Developer and UI/UX Designer based in Toronto, Canada.
                    I have a passion for programming, video games, and messing around. I design, code and deliver
                    cool shit you should check me out.</p>
            </div>
        </div>
    )
}

export default Panel1