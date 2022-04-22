import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Layout from "../common/Layout";
import Maconry from "react-masonry-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Popup from "../common/Popup";

function Blog() {
  const path = process.env.PUBLIC_URL;
  const [items, setItems] = useState([]);
  const [loading, setloading] = useState(true);
  const [enableClick, setEnableClick] = useState(true);
  const frame = useRef(null);
  const input = useRef(null);
  const pop = useRef(null);
  const [PopLoading, setPopLoading] = useState(false);
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

  const getFlickr = async (opt) => {
    const key = "28e7d1179792950a30beae3c69e7d9dd";
    const method1 = "flickr.interestingness.getList";
    const method2 = "flickr.photos.search";
    const num = opt.count;
    let url = "";
    if (opt.type === "interest") {
      url = `https://www.flickr.com/services/rest/?method=${method1}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
    }
    if (opt.type === "search") {
      url = `https://www.flickr.com/services/rest/?method=${method2}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`;
    }

    await axios.get(url).then((json) => {
      if (json.data.photos.photo.length === 0) {
        alert("해당 검색어의 이미지가 없습니다.");
        return;
      }
      setItems(json.data.photos.photo);
      setPopLoading(true);
      console.log(json.data.photos.photo);
    });

    setTimeout(() => {
      frame.current.classList.add("on");
      setloading(false);
      setTimeout(() => {
        setEnableClick(true);
      }, 1000);
    }, 1000);
  };

  const showSearch = (e) => {
    const result = input.current.value.trim();

    if (!result || result === "") {
      alert("검색어를 입력하세요");

      return;
    }

    if (enableClick) {
      setEnableClick(false);
      setloading(true);
      frame.current.classList.remove("on");

      getFlickr({
        type: "search",
        count: 20,
        tags: result,
      });
    }
  };

  const masonryOptions = {
    transitionDuration: "0.5s",
  };

  useEffect(() => {
    getFlickr({
      type: "interest",
      count: 20,
    });
    console.log();
  }, []);

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
                showSearch(e);
              }
            }}
          />
          <button
            onClick={(e) => {
              showSearch(e);
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button
            onClick={() => {
              if (enableClick) {
                setEnableClick(false);
                setloading(true);
                frame.current.classList.remove("on");
                getFlickr({
                  type: "interest",
                  count: 20,
                });
              }
            }}
          >
            View Original Gallery
          </button>
        </div>

        <div className="frame" ref={frame}>
          <Maconry elementType={"div"} options={masonryOptions}>
            {items.map((item, idx) => {
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
        {PopLoading && (
          <img
            src={`https://live.staticflickr.com/${items[popIndex].server}/${items[popIndex].id}_${items[popIndex].secret}_b.jpg`}
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
