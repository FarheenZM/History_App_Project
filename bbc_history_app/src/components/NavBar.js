import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css"


const NavBar = () => (
  <ul>
    <li>
      <Link to="/contact">Contact</Link>

    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>

      <Link to="/">Home</Link>
    </li>

  </ul>
)



export default NavBar;
