import { useState } from "react";
import { Link } from "react-router-dom";
import { CDN_LOGO } from "../utilis/common";
// import useOnlineStatus from "../utilis/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('login');
  // const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between items-center pr-4 bg-white">
      <div className="logo-container">
        <img className="w-28 h-28" src={CDN_LOGO} />
      </div>
      <div>
        <ul className="flex gap-4">
          {/* <li>OnlineStatus:
            {onlineStatus ? "🟢" : "🔴"}
          </li> */}
          <li className="px-2 py-1 rounded-sm text-lg "><Link to="/">Home</Link></li>
          <li className="px-2 py-1 rounded-sm text-lg "><Link to="/about">About Us</Link></li>
          <li className="px-2 py-1 rounded-sm text-lg "><Link to="/contact">Contact Us</Link></li>
          <li className="px-2 py-1 rounded-sm text-lg "><Link to="/grocery">Grocery</Link></li>
        </ul>
      </div>
      <button className="px-2 py-1 rounded-sm  border border-black " onClick={() => {
        btnNameReact == "login" ? setBtnNameReact('logout') : setBtnNameReact('login')
      }}>{btnNameReact} </button>
     
    </div>
  )
}
export default Header;