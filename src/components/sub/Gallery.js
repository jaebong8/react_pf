import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Layout from "../common/Layout";
import Popup from "../common/Popup";

function Gallery() {
  const path = process.env.PUBLIC_URL;
  const key = "28e7d1179792950a30beae3c69e7d9dd";
  const method1 = "flickr.interestingness.getList";
  const searchMethod = "flickr.photos.search";
  const method2 = "flickr.people.getPhotos";
  const id = "195088691@N07";
  const num = 20;
  const url = `https://www.flickr.com/services/rest/?method=${method2}&api_key=${key}&per_page=${num}&format=json&nojsoncallback=1&user_id=${id}`;
  const [Items, setItems] = useState([]);
  const [Open, setOpen] = useState(false);
  const [Index, setIndex] = useState(0);
  const [Loading, setLoading] = useState(true);
  const [PopLoading, setPopLoading] = useState(false);
  const frame = useRef(null);
  const pop = useRef(null);
  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    axios.get(url).then((json) => {
      const data = json.data.photos.photo;
      setItems(data);
      setPopLoading(true);
      setTimeout(() => {
        frame.current.classList.add("on");
        setLoading(false);
      }, 1000);
    });
  };
  const getFilter = (title) => {
    axios.get(url).then((json) => {
      const data = json.data.photos.photo;
      const regex = new RegExp(title);
      const result = data.filter((item) => regex.test(item.title));
      setItems(result);
      setTimeout(() => {
        frame.current.classList.add("on");
        setLoading(false);
      }, 1000);
    });
  };

  return (
    <>
      <Layout name={"Gallery"}>
        {Loading && <img src={`${path}/img/loading.gif`} className="loading" />}
        <div className="wrapper">
          <span>{Items.length} PRODUCTS</span>
          <div className="wrap">
            <div className="filter_box">
              <h2>FILTERS</h2>
              <ul>
                <li
                  onClick={() => {
                    setLoading(true);
                    frame.current.classList.remove("on");
                    getItem();
                  }}
                >
                  FURNITURE
                </li>
                <li
                  onClick={() => {
                    setLoading(true);
                    frame.current.classList.remove("on");
                    getFilter("DECOR");
                  }}
                >
                  DECORS
                </li>
                <li
                  onClick={() => {
                    setLoading(true);
                    frame.current.classList.remove("on");
                    getFilter("CHAR");
                  }}
                >
                  CHAIRS
                </li>
                <li
                  onClick={() => {
                    setLoading(true);
                    frame.current.classList.remove("on");
                    getFilter("LIGHT");
                  }}
                >
                  LAMP
                </li>
              </ul>
            </div>
            <ul ref={frame}>
              {Items.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={() => {
                      pop.current.open();
                      setIndex(idx);
                    }}
                  >
                    <div className="inner">
                      <div className="pic">
                        <img
                          src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
                        />
                      </div>
                      <div className="txt">
                        <h3>{item.title}</h3>
                        <span>VIEW</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>

      <Popup ref={pop}>
        {PopLoading && (
          <img
            src={`https://live.staticflickr.com/${Items[Index].server}/${Items[Index].id}_${Items[Index].secret}_b.jpg`}
            alt=""
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

export default Gallery;
