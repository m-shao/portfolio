import { Outlet } from 'react-router-dom'
import Static from '../images/static.png'

const Layout = () => {
  return (
    <div>
        <img src={Static} alt="static overlay" className="fixed top-0 left-0 w-screen h-screen pointer-events-none" />
        <Outlet/>
    </div>
  )
}

export default Layout