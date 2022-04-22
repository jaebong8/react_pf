import React from "react";
import { Link } from "react-router-dom";

function Section1() {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="section1 myScroll">
      <div className="text">
        <h2>CREATING PERFECT LINES AND IMPOSING PRESENCE</h2>
        <p>
          Developed the concept of exclusivity, a Beige' features timeless
          furniture, with natural fabrics, curved lines, plenty of mirrors and
          classic design, which can be incorporated into any decor project. The
          pieces enchant for their sobriety, to last for generations, faithful
          to the shapes of each period, with a touch of the present.
        </p>
        <Link to="/about">READ ABOUT US</Link>
      </div>
      <div className="pic1">
        <img src={`${path}/img/LIGHT_C_700x.jpg`} />
      </div>
      <div className="pic2">
        <img src={`${path}/img/LIGHT_D_700x.jpg`} />
      </div>
      <div className="pic3">
        <img src={`${path}/img/LIGHT_F_700x.jpg`} />
      </div>
      <div className="pic4">
        <img src={`${path}/img/SCENE05_v.webp`} />
      </div>
      <div className="pic5">
        <img src={`${path}/img/LIGHT_A_700x.jpg`} />
      </div>
      <div className="pic6">
        <img src={`${path}/img/DECOR_H_700x.jpg`} />
      </div>
    </section>
  );
}

export default Section1;
