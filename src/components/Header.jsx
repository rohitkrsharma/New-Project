import { useState } from "react";
import { CDN_LOGO } from "../utilis/common";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('login')
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link className="decoration1" to="/">Home</Link></li>
          <li><Link className="decoration1" to="/about">About Us</Link></li>
          <li><Link className="decoration1" to="/contact">Contact Us</Link></li>
          <button className="login" onClick={() => {
            btnNameReact == "login" ? setBtnNameReact('logout') : setBtnNameReact('login')
          }}>{btnNameReact} </button>
        </ul>
      </div>
    </div>
  )
}
export default Header;