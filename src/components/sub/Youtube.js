import React, { useEffect, useRef, useState } from "react";
import Layout from "../common/Layout";
import Popup from "../common/Popup";
import axios from "axios";

function Youtube() {
  const path = process.env.PUBLIC_URL;
  const [Videos, setVideos] = useState([]);
  const [Open, setOpen] = useState(false);
  const [PopIdx, setPopIdx] = useState(0);
  let [Index, setIndex] = useState(0);
  let [activeIndex, setActiveIndex] = useState(0);
  const wrap = useRef();
  const activation = () => {
    wrap.current.querySelectorAll("article").forEach((item) => {
      item.classList.remove("on");
    });
    wrap.current.querySelectorAll("article")[activeIndex].classList.add("on");
  };
  const rotate = (Index) => {
    wrap.current.style.transform = `rotate(${
      (360 / Videos.length) * Index
    }deg)`;
  };

  useEffect(() => {
    const key = "AIzaSyCIiUbJj1mOlyiNDy8QONEEYimF4Ta1qP4";
    const id = "PLCCz4evGBSLXFehGpZ1OxnWiMM-jrsddP";
    const num = 6;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=${num}&playlistId=${id}`;
    axios.get(url).then((data) => {
      console.log(data.data.items);
      setVideos(data.data.items);
    });
  }, []);

  useEffect(() => {
    rotate(Index);
  }, [Index]);

  return (
    <>
      <Layout name={"Youtube"}>
        <img src={`${path}/img/youtube1.jpg`} />
        <div className="wrap" ref={wrap}>
          {Videos.map((video, idx) => {
            const desc = video.snippet.description;
            const date = video.snippet.publishedAt;

            return (
              <article
                onClick={() => {
                  setOpen(!Open);
                  setPopIdx(idx);
                }}
                key={idx}
                style={{
                  transform: `rotate(${
                    (360 / Videos.length) * idx
                  }deg) translateY(-150%)`,
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
        <button
          className="next"
          onClick={() => {
            setIndex(--Index);
            if (activeIndex === Videos.length - 1) {
              wrap.current.querySelectorAll("article").forEach((item) => {
                item.classList.remove("on");
              });
              wrap.current.querySelectorAll("article")[0].classList.add("on");
              setActiveIndex(0);
              return;
            }
            setActiveIndex(++activeIndex);
            activation();
          }}
        >
          <span>NEXT</span>
        </button>
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
                [Videos.length - 1].classList.add("on");
              setActiveIndex(Videos.length - 1);
              return;
            }
            setActiveIndex(--activeIndex);
            activation();
          }}
        >
          <span>PREV</span>
        </button>
      </Layout>

      {Open && (
        <Popup Open={Open} setOpen={setOpen}>
          <iframe
            src={
              `https://www.youtube.com/embed/` +
              Videos[PopIdx].snippet.resourceId.videoId
            }
            frameBorder="0"
          ></iframe>
        </Popup>
      )}
    </>
  );
}

export default Youtube;
