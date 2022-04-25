import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import Anime from "../../class/anim";

function ScrollTopBtn() {
  const moveTop = () => {
    new Anime(window, {
      prop: "scroll",
      value: 0,
    });
  };
  return (
    <button className="ScrollTopBtn" onClick={moveTop}>
      <FontAwesomeIcon icon={faAnglesUp} />
    </button>
  );
}

export default ScrollTopBtn;
