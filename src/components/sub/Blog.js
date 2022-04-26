import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Layout from "../common/Layout";
import Maconry from "react-masonry-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Popup from "../common/Popup";
import { useDispatch, useSelector } from "react-redux";

function Blog() {
  const { flickr } = useSelector((state) => state.flickrReducer);
  const dispatch = useDispatch();
  const [opt, setOpt] = useState({ type: "interest" });
  const path = process.env.PUBLIC_URL;
  const [loading, setloading] = useState(true);
  const [enableClick, setEnableClick] = useState(true);
  const frame = useRef(null);
  const input = useRef(null);
  const pop = useRef(null);
  const [popIndex, setpopIndex] = useState(0);
  const [Month, setMonth] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octorber",
    "November",
    "December",
  ]);
  const masonryOptions = {
    transitionDuration: "0.5s",
  };

  const endLoading = () => {
    setTimeout(() => {
      frame.current.classList.add("on");
      setloading(false);
      setTimeout(() => setEnableClick(true), 1000);
    }, 1000);
  };

  const initGallery = () => {
    setEnableClick(false);
    setloading(true);
    frame.current.classList.remove("on");
    setOpt({ type: "interest" });
    endLoading();
  };
  const showSearch = (e) => {
    const result = input.current.value.trim();

    if (!result || result === "") {
      alert("검색어를 입력하세요");

      return;
    }

    setEnableClick(false);
    setloading(true);
    frame.current.classList.remove("on");

    setOpt({ type: "search", tags: result });
    input.current.value = "";
    endLoading();
  };

  useEffect(() => {
    dispatch({ type: "FLICKR_START", opt });
    endLoading();
  }, [opt]);

  return (
    <>
      <Layout name={"Blog"}>
        {loading && (
          <img src={`${path}/img/loading.gif`} className="loading"></img>
        )}
        <div className="searchBox">
          <input
            placeholder="Search"
            type="text"
            ref={input}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                if (enableClick) showSearch();
              }
            }}
          />
          <button
            onClick={(e) => {
              if (enableClick) showSearch();
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button
            onClick={() => {
              if (enableClick) {
                initGallery();
              }
            }}
          >
            View Original Gallery
          </button>
        </div>

        <div className="frame" ref={frame}>
          <Maconry elementType={"div"} options={masonryOptions}>
            {flickr.map((item, idx) => {
              const buddySrc = `http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`;
              let monthRandom = parseInt(Math.random() * 12);
              let dayRandom = parseInt(Math.random() * 31);
              return (
                <article key={idx}>
                  <div className="inner">
                    <div
                      className="pic"
                      onClick={() => {
                        setpopIndex(idx);
                        pop.current.open();
                      }}
                    >
                      <img
                        src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
                      />
                    </div>
                    <div className="con">
                      <div className="date">
                        <span>
                          <FontAwesomeIcon icon={faCalendar} />
                          {`${Month[monthRandom]} ${dayRandom + 1}, 2022`}
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faComment} />
                          {`${monthRandom} Comments`}
                        </span>
                      </div>
                      <h2>{item.title ? item.title : "No Title"}</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate commodi laborum vero nesciunt? Voluptate
                        expedita illum delectus, officia alias voluptatem vel
                        dolorem optio, vero, dolores nostrum amet nobis sint.
                        Consectetur, reiciendis modi dignissimos saepe animi
                        molestiae asperiores eius at mollitia.
                      </p>
                      <div className="profile">
                        <div className="pic">
                          <img
                            src={buddySrc}
                            onError={(e) => {
                              e.target.src = `https://www.flickr.com/images/buddyicon.gif`;
                            }}
                          />
                        </div>
                        <div className="name">
                          <h3>{item.owner}</h3>
                          <span>Photographer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </Maconry>
        </div>
      </Layout>
      <Popup ref={pop}>
        {flickr.length !== 0 && (
          <img
            src={`https://live.staticflickr.com/${flickr[popIndex].server}/${flickr[popIndex].id}_${flickr[popIndex].secret}_b.jpg`}
          />
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

export default Blog;
