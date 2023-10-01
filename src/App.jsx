import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Projects from "./pages/Projects"
import TechStack from "./pages/TechStack"
import Contact from "./pages/Contact"

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="/tech-stack" element={<TechStack/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
