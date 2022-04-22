import React from "react";

function ScrollBtns(props) {
  return (
    <ul className="scrollBtns">
      {props.Sections.map((_, idx) => {
        return (
          <li
            key={idx}
            onClick={() => {
              props.setIndex(idx);
            }}
            className={idx === 0 ? "on" : null}
          ></li>
        );
      })}
    </ul>
  );
}

export default ScrollBtns;
