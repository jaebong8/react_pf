import React from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";
const path = process.env.PUBLIC_URL;

function Header() {
  return (
    <header>
      <div className="inner">
        <h1>
          <NavLink to="/">
            <img src={`${path}/img/logo.png`} alt="logo" />
          </NavLink>
        </h1>
        <Hamburger />
        <ul id="gnb">
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/services">SERVICES</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">GALLERY</NavLink>
          </li>
          <li>
            <NavLink to="/youtube">YOUTUBE</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
        <ul id="gnb_sign">
          <li>
            <NavLink to="/sign_in">LOG IN</NavLink>
          </li>
          <li>
            <NavLink to="/sign_up">SIGN UP</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
