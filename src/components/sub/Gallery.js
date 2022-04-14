import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../common/Layout";
import Popup from "../common/Popup";

function Gallery() {
  const key = "28e7d1179792950a30beae3c69e7d9dd";
  const method1 = "flickr.interestingness.getList";
  const searchMethod = "flickr.photos.search";
  const num = 20;
  const url = `https://www.flickr.com/services/rest/?method=${method1}&api_key=${key}&per_page=${num}&format=json&nojsoncallback=1`;
  const [Items, setItems] = useState([]);
  const [Open, setOpen] = useState(false);
  const [Index, setIndex] = useState(0);
  useEffect(() => {
    axios.get(url).then((json) => {
      setItems(json.data.photos.photo);
    });
  }, []);

  return (
    <>
      <Layout name={"Gallery"}>
        <ul>
          {Items.map((item, idx) => {
            return (
              <li
                key={idx}
                onClick={() => {
                  setOpen(!Open);
                  setIndex(idx);
                }}
              >
                <div className="inner">
                  <div className="pic">
                    <img
                      src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Layout>
      {Open && (
        <Popup Open={Open} setOpen={setOpen}>
          <img
            src={`https://live.staticflickr.com/${Items[Index].server}/${Items[Index].id}_${Items[Index].secret}_b.jpg`}
            alt=""
          />
        </Popup>
      )}
    </>
  );
}

export default Gallery;
