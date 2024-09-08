import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
const Nav = (props) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
