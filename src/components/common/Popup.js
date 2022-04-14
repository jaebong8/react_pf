import React from "react";
import styled from "styled-components";

const Pop = styled.aside`
  width: 100%;
  height: 100vh;
  padding: 5vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 10;
  > span {
    font: bold 14px/1 "arial";
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 3vw;
    right: 3vw;
  }
  .con {
    width: 100%;
    height: 100%;
    border: 1px solid #888;
    overflow: hidden;
    iframe {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
function Popup(props) {
  return (
    <Pop className="popup">
      <span
        onClick={() => {
          props.setOpen(!props.Open);
        }}
      >
        close
      </span>
      <div className="con">{props.children}</div>
    </Pop>
  );
}

export default Popup;
