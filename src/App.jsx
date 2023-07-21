import Panel1 from "./components/Panel1"
import Panel2 from "./components/Panel2"
import Panel3 from "./components/Panel3"
import Navbar from "./components/Navbar"
import SocialMedia from "./components/SocialMedia"
import Cursor from "./components/Cursor"

import staticBack from "./images/static.png"

function App() {

    return (
        <div className="App bg-port-dark text-port-light snap-y-mandatory h-[415vh]">
            <Navbar/>
            <Panel1/>
            <div className="h-[30rem] w-screen"></div>
            <Panel2/>
            <div className="h-[30rem] w-screen"></div>
            <Panel3/>
            <SocialMedia/>
            {/* <Cursor/> */}
            <img className="fixed pointer-events-none top-0 left-0 w-screen h-screen" src={staticBack} alt="" />

        </div>
    )
}

export default App
