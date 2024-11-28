import { NavLink } from "react-router-dom"
import '../App.css'

const NavBar = () => {
  return (
    <div className=' flex flex-row justify-between gap-20 place-content-evenly text-[white]'>
          <NavLink className="w-20 bg-[#646cff] rounded"
            to='/'>
              Home
          </NavLink>
          <NavLink className="w-20 bg-[#646cff] rounded "
            to='/pastes'>
              All Notes
          </NavLink>
    </div>
  )
}

export default NavBar
