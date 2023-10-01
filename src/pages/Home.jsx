import {useEffect, useRef, useState} from 'react'

import Panel1 from "../components/Panel1"
import Navbar from "../components/Navbar"
import SocialMedia from "../components/SocialMedia"
import Footer from "../components/Footer"
import Cursor from "../components/Cursor"


function Home() {

    return (
        <div className="App bg-port-dark text-port-light snap-y-mandatory h-[260vh]">
            <Navbar/>
            <Panel1/>
            <div className="h-[30rem] w-screen"></div>
            <Footer/>
        </div>
    )
}

export default Home
