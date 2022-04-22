import React from "react";

function Section4() {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="section4 myScroll">
      <div className="wrap1">
        <div className="sideTitle">DETAILS</div>
        <div className="content">
          <div className="con">
            <h2>EVERY DETAILS MATTER</h2>
            <span>
              WE ARE SPECIALIZED IN ADORNMENTS, THAT BRING CHARM TO ANY
              ENVIRONMENT.
            </span>
            <p>
              There are multiples of high quality pieces, with styles that
              transition from classic to contemporary. An exclusive selection of
              lampshades, vases, murals, pillows, paintings and many gifts to
              compose great projects. In order selection, a mix of basic style,
              stricter customization and more compact dimensions, composing
              sophisticated and exclusive environments.
            </p>
          </div>
        </div>
      </div>
      <div className="wrap2">
        <div className="sideTitle2">DETAILS</div>
        <div className="con1">
          <video
            src="https://cdn.shopify.com/s/files/1/0605/2062/8438/files/new_tiny_video_header.mp4?v=1634485495"
            autoPlay
            muted
            loop
          ></video>
          <span>SOPHISTICATED DETAILS</span>
        </div>
        <div className="con2">
          <div className="pic1">
            <img src={`${path}/img/DECOR_A_700x.jpg`} />
            <span>CENTURY DASHE</span>
          </div>
          <div className="pic2">
            <img src={`${path}/img/CHAR_D_700x.jpg`} />
            <span>NATIVE CHAIR</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
