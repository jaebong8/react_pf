import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";

function Header(props) {
  const menu = useRef();
  return (
    <>
      <header className={props.type}>
        <div className="inner">
          <h1
            onClick={() => {
              menu.current.close();
            }}
          >
            <NavLink to="/">Beige'</NavLink>
          </h1>
          <button
            className="hamburger"
            onClick={() => {
              menu.current.open();
            }}
          >
            MENU
          </button>

          <NavLink
            to="/join"
            className="join"
            onClick={() => {
              menu.current.close();
            }}
            activeStyle={{
              color: "#fff",
              backgroundColor: "#8d734d",
              border: "1px solid transparent",
            }}
          >
            JOIN
          </NavLink>
        </div>
      </header>
      <Menu ref={menu} />
    </>
  );
}

export default Header;
