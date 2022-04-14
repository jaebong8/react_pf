import React from "react";

function Visual(props) {
  const path = process.env.PUBLIC_URL;
  return (
    <figure id="visual" className={props.type}>
      <video
        src="https://cdn.shopify.com/s/files/1/0605/2062/8438/files/new_tiny_video_header.mp4?v=1634485495"
        loop={true}
        autoPlay={true}
        muted
      ></video>
      {/* <img src={`${path}/img/bg1.jpg`} /> */}
      <h2>
        SEAMLESS FURNITURE <br /> WITH NATURAL FABRICS
      </h2>
    </figure>
  );
}

export default Visual;
