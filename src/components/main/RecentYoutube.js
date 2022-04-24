import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Popup from "../common/Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function RecentYoutube() {
  const youtubeData = useSelector((state) => state.youtubeReducer.youtube);
  const [PopIdx, setPopIdx] = useState(0);
  const pop = useRef(null);

  useEffect(() => {
    console.log(youtubeData);
  }, [youtubeData]);

  return (
    <>
      <section className="recentYoutube myScroll">
        <div className="inner">
          <h2>RECENT YOUTUBE</h2>
          <ul>
            {youtubeData.map((data, idx) => {
              if (idx < 4)
                return (
                  <li
                    key={idx}
                    onClick={() => {
                      pop.current.open();
                      setPopIdx(idx);
                    }}
                  >
                    <div className="pic">
                      <img src={data.snippet.thumbnails.medium.url} />
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                  </li>
                );
            })}
          </ul>
        </div>
      </section>
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

export default RecentYoutube;
