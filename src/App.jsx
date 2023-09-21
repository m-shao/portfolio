import Panel1 from "./components/Panel1"
import Panel2 from "./components/Panel2"
import Panel3 from "./components/Panel3"
import Navbar from "./components/Navbar"
import SocialMedia from "./components/SocialMedia"
import Cursor from "./components/Cursor"

import Footer from "./components/Footer"

import staticBack from "./images/static.png"

function App() {

    return (
        <div className="App bg-port-dark text-port-light snap-y-mandatory h-[250vh]">
            <Navbar/>
            <Panel1/>
            <div className="h-[30rem] w-screen"></div>
            <Footer/>
            <SocialMedia/>
            {/* <div className="h-[30rem] w-screen"></div>
            <Panel2/>
            <div className="h-[30rem] w-screen"></div>
            <Panel3/>
            <SocialMedia/> */}
            {/* <Cursor/> */}
            <img className="fixed top-0 left-0 w-screen h-screen pointer-events-none" src={staticBack} alt="" />

        </div>
    )
}

export default App
