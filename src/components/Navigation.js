import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/_navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
