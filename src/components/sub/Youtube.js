import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../common/Layout";
import Popup from "../common/Popup";

function Youtube() {
  const youtubeData = useSelector((state) => state.youtubeReducer.youtube);

  const path = process.env.PUBLIC_URL;
  const [PopIdx, setPopIdx] = useState(0);
  let [Index, setIndex] = useState(0);
  let [activeIndex, setActiveIndex] = useState(0);
  const wrap = useRef();
  const pop = useRef();
  const activation = () => {
    wrap.current.querySelectorAll("article").forEach((item) => {
      item.classList.remove("on");
    });
    wrap.current.querySelectorAll("article")[activeIndex].classList.add("on");
  };
  const rotate = (Index) => {
    wrap.current.style.transform = `rotate(${
      (360 / youtubeData.length) * Index
    }deg)`;
  };

  useEffect(() => {
    rotate(Index);
  }, [Index]);

  return (
    <>
      <Layout name={"Youtube"}>
        <div className="blog">
          <div className="left_slide">OUR STORIES</div>
          <div className="wrapper">
            <ul className="top_slide">
              <li>FEATURED ARTICLE</li>
              <li>BLOG</li>
            </ul>
            <div className="content">
              <article>
                <h2>Manhattan Pied-à-terre for a new Chicago apartment</h2>
                <p>
                  Interior designer Sarah Vaile remembers eyeing a New York City
                  apartment—one with bold colors and a personality as distinct
                  as its chic owner—in a 2014 issue of House Beautiful, and
                  tucking it away for future design inspiration. Years later, in
                  a serendipitous turn of events, the woman she’d seen in the
                  magazine—a stylish figure now in her 30s—just moved to
                  Chicago.
                </p>
                <button>READ ARTICLE</button>
              </article>
              <article>
                <div className="pic">
                  <img src={`${path}/img/youtube2.jpg`} />
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="rotateBox">
          <div
            className="pic"
            style={{
              background: `url(${path}/img/youtube1.jpg) no-repeat top/cover`,
            }}
          ></div>

          <div className="wrap" ref={wrap}>
            {youtubeData.map((video, idx) => {
              const desc = video.snippet.description;
              const date = video.snippet.publishedAt;

              return (
                <article
                  onClick={() => {
                    pop.current.open();
                    setPopIdx(idx);
                  }}
                  key={idx}
                  style={{
                    transform: `rotate(${
                      (360 / youtubeData.length) * idx
                    }deg) translateY(-155%)`,
                  }}
                  className={idx === 0 ? "on" : null}
                >
                  <div className="inner">
                    <div className="pic">
                      <img src={video.snippet.thumbnails.high.url} />
                    </div>

                    <h2>{video.snippet.title}</h2>
                    <p>
                      {desc.length > 150 ? desc.substr(0, 150) + "..." : desc}
                    </p>
                    <span>{date.split("T")[0]}</span>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="nextBox">
            <button
              className="next"
              onClick={() => {
                setIndex(--Index);
                if (activeIndex === youtubeData.length - 1) {
                  wrap.current.querySelectorAll("article").forEach((item) => {
                    item.classList.remove("on");
                  });
                  wrap.current
                    .querySelectorAll("article")[0]
                    .classList.add("on");
                  setActiveIndex(0);
                  return;
                }
                setActiveIndex(++activeIndex);
                activation();
              }}
            >
              <span>NEXT</span>
            </button>
          </div>
          <div className="prevBox">
            <button
              className="prev"
              onClick={() => {
                setIndex(++Index);

                if (activeIndex === 0) {
                  wrap.current.querySelectorAll("article").forEach((item) => {
                    item.classList.remove("on");
                  });
                  wrap.current
                    .querySelectorAll("article")
                    [youtubeData.length - 1].classList.add("on");
                  setActiveIndex(youtubeData.length - 1);
                  return;
                }
                setActiveIndex(--activeIndex);
                activation();
              }}
            >
              <span>PREV</span>
            </button>
          </div>
        </div>
      </Layout>

      <Popup ref={pop}>
        {youtubeData.length !== 0 && (
          <iframe
            src={
              `https://www.youtube.com/embed/` +
              youtubeData[PopIdx].snippet.resourceId.videoId
            }
            frameBorder="0"
          ></iframe>
        )}

        <span
          onClick={() => {
            pop.current.close();
          }}
        >
          CLOSE
        </span>
      </Popup>
    </>
  );
}

export default Youtube;
