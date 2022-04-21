import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

function Section3() {
  const path = process.env.PUBLIC_URL;
  const [ImgSrc, setImgSrc] = useState([
    "CHAR_A_700x.jpg",
    "CHAR_F_700x.jpg",
    "DECOR_A_700x.jpg",
    "DECOR_G_700x.jpg",
    "LIGHT_A_700x.jpg",
  ]);
  return (
    <section className="section3">
      <div className="side">LOOKBOOK</div>
      <div className="text">
        <h2>LOOKBOOK</h2>
        <p>
          The pieces stand out for their contemporary straight lines and
          imposing presence. Current, following the world trend of the great
          masters, the furniture stands out for its noble and innovative
          materials, composing sophisticated and exclusive environments.
        </p>
      </div>
      <div className="con">
        <div className="text">
          <div className="category">ITEM</div>
          <div className="category">DESCRIPTION</div>
        </div>
        <div className="pic">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            speed={1000}
          >
            {ImgSrc.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <img src={`${path}/img/${item}`} />
                </SwiperSlide>
              );
            })}
            <div className="link">
              <Link to="/gallery">SEE LOOKBOOK</Link>
              <Link to="/gallery">SHOP ALL</Link>
            </div>
          </Swiper>
        </div>
        <div className="ex">
          <span>MATERIALS:</span>
          <span>CERAMIC, GLASS, IRON, WOOD</span>
        </div>
        <div className="ex">
          <span>PRODUCED IN:</span>
          <span>CANADA, ITALY, UNITED STATES</span>
        </div>
        <div className="ex">
          <span>CATEGORIES:</span>
          <span>DECORATION, LAMP, FURNITURE</span>
        </div>
      </div>
    </section>
  );
}

export default Section3;
