import { Outlet } from 'react-router-dom'

import Hamburger from '../components/Hamburger'
import SocialMedia from '../components/SocialMedia'

import Static from '../images/static.png'

const Layout = ({children}) => {
  return (
    <div className='top-0 left-0 w-screen h-screen'>
        <Hamburger/>
        <img src={Static} alt="static overlay" className="fixed top-0 left-0 z-50 w-screen h-screen pointer-events-none " />
        <Outlet/>
        <SocialMedia/>
    </div>
  )
}

export default Layout