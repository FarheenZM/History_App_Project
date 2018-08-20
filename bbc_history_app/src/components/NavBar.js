import React from "react";
import {Link} from "react-router-dom";


const NavBar = () => (
  <ul>
    <li>
      <Link to="/data">Home</Link>
    </li>
      <li>
    <Link to="/about">About</Link>
      </li>
        <li>
    <Link to="/contact">Contact</Link>
        </li>

  </ul>
)



export default NavBar;
