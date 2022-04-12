import React from "react";

function Visual(props) {
  const path = process.env.PUBLIC_URL;
  return (
    <figure
      id="visual"
      className={props.type}
      style={{
        background: `url(${path}/img/slider-bg1.jpg) no-repeat center/cover`,
      }}
    ></figure>
  );
}

export default Visual;
