import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const path = process.env.PUBLIC_URL;

function Header() {
  const active = { color: "#fff1b4" };
  const [MenuActive, setMenuActive] = useState(false);
  return (
    <header>
      <div className="inner">
        <h1>
          <NavLink to="/">Beige'</NavLink>
        </h1>
        <button
          className="hamburger"
          onClick={() => {
            setMenuActive(true);
          }}
        >
          MENU
        </button>

        <ul id="gnb" style={MenuActive ? { left: "0" } : null}>
          <li>
            <NavLink to="/about" activeStyle={active}>
              ABOUT
            </NavLink>
          </li>

          <li>
            <NavLink to="/gallery" activeStyle={active}>
              GALLERY
            </NavLink>
          </li>
          <li>
            <NavLink to="/youtube" activeStyle={active}>
              YOUTUBE
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" activeStyle={active}>
              Community
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeStyle={active}>
              CONTACT
            </NavLink>
          </li>
          <button
            className="closeBtn"
            onClick={() => {
              setMenuActive(false);
            }}
          >
            CLOSE
          </button>
        </ul>

        <NavLink to="/join" activeStyle={active} className="join">
          JOIN
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
