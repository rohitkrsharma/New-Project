import { CDN_LOGO } from "../utilis/common";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}
export default Header;