import { useState, useEffect } from 'react'

import { Link, useLocation } from 'react-router-dom'


const Hamburger = () => {
    const location = useLocation()

    const [open, setOpen] = useState(false)    

    const toggleOpen = () => {
        setOpen(!open)
    }

    useEffect(() => {
        setOpen(false)
    }, [location])

    return (
        <>
            <button onClick={toggleOpen} 
                className={"fixed z-50 flex items-center justify-center w-24 h-24 origin-top-left rounded-full top-4 right-4 md:top-8 md:right-8 lg:right-12 lg:top-12 xl:top-16 xl:right-16 bg-port-dark transition-all ease-in-out duration-500 "
                + (open && "bg-port-light h-[40rem] w-[40rem] lg:translate-x-[50%] translate-x-[45%] lg:-translate-y-[50%] -translate-y-[45%] ")
                + (location.pathname === "/" && " hidden")}>
                <div className='relative space-y-4'>
                    <span className={"block w-12 h-0.5 rounded-sm transition-transform ease-in-out duration-500 " 
                        + (open ? "bg-port-dark translate-y-[9px] rotate-45" : "bg-port-light")}></span>
                    <span className={"block h-0.5 rounded-sm transition-transform ease-in-out duration-500 " 
                        + (open ? "bg-port-dark w-12 -translate-y-[9px] -rotate-45" : "bg-port-light w-8")}></span>
                    <div className={'absolute pt-4 space-y-4 text-right right-2 font-[montserrat] text-lg md:text-xl transition-opacity ease-in-out duration-500 ' + (!open && "opacity-0")}>
                        <ul className="flex flex-col gap-4">
                            <li className="cursor-pointer nav-link group">
                                <Link to="/" className='flex flex-col items-end'>
                                    <h2>Home</h2>
                                    <div className="h-[1px] w-0 bg-port-dark transition-all duration-300 group-hover:w-3/5"></div>
                                </Link>
                            </li>
                            <li className="cursor-pointer nav-link group">
                                <Link to="tech-stack" className='flex flex-col items-end'>
                                    <h2>Tech&nbsp;Stack</h2>
                                    <div className="h-[1px] w-0 bg-port-dark transition-all duration-300 group-hover:w-full"></div>
                                </Link>
                            </li>
                            <li className="cursor-pointer nav-link group">
                                <Link to="projects" className='flex flex-col items-end'>
                                    <h2>Projects</h2>
                                    <div className="h-[1px] w-0 bg-port-dark transition-all duration-300 group-hover:w-4/5"></div>
                                </Link>
                            </li>
                            <li className="cursor-pointer nav-link group">
                                <Link to="contact" className='flex flex-col items-end'>
                                    <h2>Contact</h2>
                                    <div className="h-[1px] w-0 bg-port-dark transition-all duration-300 group-hover:w-4/5"></div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </button>
        </>
        
    )
}

export default Hamburger