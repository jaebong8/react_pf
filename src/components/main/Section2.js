import React from "react";
import { Link } from "react-router-dom";

function Section2() {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="section2 myScroll">
      <h2>ENJOY OUR FEATURED PRODUCTS</h2>
      <div className="inner">
        <ul>
          <li>
            <img src={`${path}/img/CHARD1_700x.webp`} />
            <div className="con">
              <p>NATIVE IRON CHAIR</p>
              <span>$5,900</span>
            </div>
          </li>
          <li>
            <img src={`${path}/img/CHARA1_700x.webp`} />
            <div className="con">
              <p>ONYX WOOD CHAIR</p>
              <span>$4,900</span>
            </div>
          </li>
          <li>
            <img src={`${path}/img/CHARB1_700x.webp`} />
            <div className="con">
              <p>NATIVE LIGHT CHAIR</p>
              <span>$4,500</span>
            </div>
          </li>
          <li>
            <img src={`${path}/img/CHARE1_700x.webp`} />
            <div className="con">
              <p>PAOLA WOOD CHAIR</p>
              <span>$4,900</span>
            </div>
          </li>
        </ul>
        <Link to="/gallery">SHOP ALL</Link>
      </div>
      <div className="inner2">
        <div className="con">
          <div className="wrap">
            <h2>Matté Wood Chair</h2>
            <p>
              Refinement Chair with Ripped Seat, made of retro Eucalyptus wood,
              of great resistance, Kiln dried, made with a spike system and
              painted with P.U. (Polyurethane) With its entire structure painted
              in wood, it offers a lot of elegance to your environment and when
              cleaning is very easy, as it is washable and light for movement.
              Enough of receiving visitors and not having a place to accommodate
              them. With the chair, your days as a host will be marked by a lot
              of elegance and sophistication.
            </p>
            <Link to="/gallery">VIEW PRODUCT</Link>
          </div>
        </div>
        <div className="pic">
          <img src={`${path}/img/CHARF1.webp`} />
        </div>
      </div>
    </section>
  );
}

export default Section2;
