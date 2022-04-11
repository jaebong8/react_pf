import React from "react";

function Hamburger() {
  return (
    <button
      className="btnCall"
      onClick={(e) => {
        e.currentTarget.classList.toggle("on");
      }}
    >
      <span>메뉴호출</span>
    </button>
  );
}

export default Hamburger;
