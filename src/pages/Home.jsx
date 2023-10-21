import {useEffect, useRef, useState} from 'react'

import Panel1 from "../components/Panel1"
import Navbar from "../components/Navbar"
import SocialMedia from "../components/SocialMedia"
import Footer from "../components/Footer"
import Cursor from "../components/Cursor"

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Home() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        ScrollTrigger.refresh()
        return() => ScrollTrigger.getAll().forEach(t => t.kill())
    }, [])


    return (
        <div className="App bg-port-dark text-port-light snap-y-mandatory h-[260vh]">
            <Navbar/>
            <div className='sticky'>
                <Panel1/>
                <div className="h-[30rem] w-screen"></div>
                <Footer/>
            </div>
            
        </div>
    )
}

export default Home
