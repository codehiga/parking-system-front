import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './menu.styles.css'

export const Menu = () => {

  const [ path, setPath ] = useState<string>();

  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname)
  }, [location])

  return(
    <div className="bg-slate-700 w-64">
      <div className="w-full h-12 flex justify-center items-center">
        <h1>Menu</h1>
      </div>
      <div style={{height:"calc(100% - 3rem)"}} className="w-full flex flex-col">
        <div className="w-full h-full flex flex-col gap-4 p-2 menu">
          <span className={ path == "/" ? 'active' : ''  }><Link to="/">Home</Link></span>
          <span className={ path == "/booking" ? 'active' : ''  }><Link to="/booking">Booking</Link></span>
        </div>
      </div>
    </div>
  )
}