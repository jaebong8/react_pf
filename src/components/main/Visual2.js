import React from "react";

function Visual2() {
  const path = process.env.PUBLIC_URL;
  return (
    <figure className="visual2 myScroll">
      <div
        className="bg"
        style={{
          background: `url(${path}/img/visual2.webp) no-repeat center/cover`,
          backgroundAttachment: "fixed",
        }}
      ></div>
      <video
        src="https://cdn.shopify.com/s/files/1/0605/2062/8438/files/SCENE03_v.mp4?v=1634144804"
        loop
        muted
        autoPlay
      ></video>
    </figure>
  );
}

export default Visual2;
