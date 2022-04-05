import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul className="nav-bar">
        <Link to="/">1</Link>
        <Link to="/page2">2</Link>
      </ul>
    </div>
  );
}

export default NavBar;
