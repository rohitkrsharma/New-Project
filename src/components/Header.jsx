import { useState } from "react";
import { CDN_LOGO } from "../utilis/common";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('login');
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between items-center bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-32 h-32" src={CDN_LOGO} />
      </div>
      <div className="nav-items">
        <ul className="flex gap-4 p-4 m-4 items-center">
          <li>OnlineStatus:
            {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li><Link className="hover:bg-pink-200 px-2 py-1 rounded-sm" to="/">Home</Link></li>
          <li><Link className="hover:bg-pink-200 px-2 py-1 rounded-sm" to="/about">About Us</Link></li>
          <li><Link className="hover:bg-pink-200 px-2 py-1 rounded-sm" to="/contact">Contact Us</Link></li>
          <li><Link className="hover:bg-pink-200 px-2 py-1 rounded-sm" to="/grocery">Grocery</Link></li>
          <button className="hover:bg-pink-200 px-2 py-1 rounded-sm" onClick={() => {
            btnNameReact == "login" ? setBtnNameReact('logout') : setBtnNameReact('login')
          }}>{btnNameReact} </button>
        </ul>
      </div>
    </div>
  )
}
export default Header;