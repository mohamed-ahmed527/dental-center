import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavabrComp = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={require(`./assets/logo.png`)} loading="lazy" alt="" className="w-36" />
        </div>

        <div className="list">
          <ul className={isMobile? "nav-links-mobile" : "nav-links"}  >
            <li><NavLink exact to="/" className="notactive"  activeClassName="active" > Home </NavLink></li>
            <li><NavLink exact to="/AboutComp" className="notactive"  activeClassName="active" > About </NavLink></li>
            <li><NavLink exact to="/FrequentlyComp" className="notactive"  activeClassName="active" > FAQs </NavLink></li>
            <li><NavLink exact to="/DoctorsComp" className="notactive"  activeClassName="active" > Our doctors </NavLink></li>
          </ul>
        </div>

        <div className="extra">
          <ul className={isMobile ? "extra-links-mobile" : "extra-links"}>
            <li> <Link to="/">From our stuff ?</Link> </li>
            <li> <Link to="/">Login</Link> </li>
          </ul>
        </div>
      </div>
      <button className="mobile-menu-icon font-bold text-3xl"  onClick={()=>{setIsMobile(!isMobile)}}>
        {isMobile? <i class="ri-close-fill"></i> : <i class="ri-menu-fill"></i>}
      </button>
    </nav>
  );
}
 
export default NavabrComp;